'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  Order.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [5, 50],
      }
    },
    total: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        min: 0
      },
    },
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};
