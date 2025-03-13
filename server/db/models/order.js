'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: 'courierId', as: 'courier' });
      this.belongsTo(User, { foreignKey: 'customerId', as: 'customer' });
    }
  }
  Order.init(
    {
      title: DataTypes.STRING,
      img: DataTypes.STRING,
      city: DataTypes.STRING,
      price: DataTypes.STRING,
      discountPrice: DataTypes.STRING,
      isAvailable: DataTypes.BOOLEAN,
      courierId: DataTypes.INTEGER,
      customerId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Order',
    },
  );
  return Order;
};
