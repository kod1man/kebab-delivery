const orderRouter = require('express').Router();
const { Order } = require('../../db/models');
const { verifyAccessToken, verifyRefreshToken } = require('../middlewares/verifyTokens');

orderRouter.use(verifyRefreshToken);

orderRouter.get('/', async (req, res) => {
  try {
    const allOrders = await Order.findAll();
    res.status(200).json(allOrders);
  } catch (error) {
    console.log(error, 'Ошибка в получении заказов');
    res.status(500).json({ error: 'Ошибка в получении заказов' });
  }
});

orderRouter.post('/create', async (req, res) => {
  try {
    const { id } = res.locals.user;

    const { title, city, price, discountPrice, img } = req.body;
    if (!title || !city || !price || !discountPrice || !img) {
      return res.status(400).json({ error: 'Все поля должны быть заполнены' });
    }
    const newOrder = await Order.create({
      title,
      city,
      price,
      discountPrice,
      img,
      courierId: id,
    });
    res.status(201).json(newOrder);
  } catch (error) {
    console.log(error, 'Ошибка в создании заказа');
  }
});

module.exports = orderRouter;
