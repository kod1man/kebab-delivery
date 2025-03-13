const orderRouter = require('express').Router();
const { Order, User } = require('../../db/models');
const { verifyAccessToken, verifyRefreshToken } = require('../middlewares/verifyTokens');
const fs = require('fs').promises;
const sharp = require('sharp');
const upload = require('../middlewares/multer');

orderRouter.use(verifyRefreshToken);

orderRouter.get('/info', async (req, res) => {
  try {
    const allOrders = await Order.findAll();
    res.status(200).json(allOrders);
  } catch (error) {
    console.log(error, 'Ошибка в получении заказов');
    res.status(500).json({ error: 'Ошибка в получении заказов' });
  }
});

orderRouter.post('/create', upload.single('file'), async (req, res) => {
  const { id } = res.locals.user;
  const { title, city, price, discountPrice, img } = req.body;
  if (!title || !city || !price || !discountPrice) {
    return res.status(400).json({ error: 'Все поля должны быть заполнены' });
  }
  // мультер тут
  if (!req.file) return res.status(400).json({ message: 'Файл не передан' });
  const outputBuffer = await sharp(req.file.buffer).webp().toBuffer();
  const name = `${Date.now()}.webp`;
  await fs.writeFile(`./public/img/${name}`, outputBuffer);
  try {
    const newOrder = await Order.create({
      title,
      city,
      price,
      discountPrice,
      img: name,
      courierId: id,
    });
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ error: 'Ошибка в создании заказа' });
  }
});

orderRouter.delete('/delete/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findByPk(id);

    if (!order) {
      return res.status(404).json({ error: 'Заказ не найден' });
    }

    await order.destroy();
    res.status(200).json({ message: 'Заказ успешно удален' });
  } catch (error) {
    console.error('Ошибка при удалении заказа:', error);
    res.status(500).json({ error: 'Ошибка при удалении заказа' });
  }
});

orderRouter.put('/:orderId/purchase', async (req, res) => {
  try {
    const { orderId } = req.params;
    const { customerId } = req.body;

    const order = await Order.findByPk(orderId);

    if (!order) {
      return res.status(404).json({ message: 'Заказ не найден' });
    }

    order.customerId = customerId;
    order.isAvailable = false;
    await order.save();

    const user = await User.findByPk(customerId);
    if (!user) {
      return res.status(404).json({ message: 'Пользователь не найден' });
    }

    res.status(200).json({ message: 'Заказ успешно выкуплен', order });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ошибка при обработке запроса' });
  }
});

module.exports = orderRouter;
