'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {

  class OrderDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      OrderDetail.belongsTo(models.Order, { foreignKey: 'orderId' }),
      OrderDetail.belongsTo(models.Product, { foreignKey: 'productId' })
    }
  }
  OrderDetail.init({
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },


  }, {
    sequelize,
    modelName: 'OrderDetail',
  });


  return OrderDetail;
};
