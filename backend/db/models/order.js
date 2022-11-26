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
      // Order.hasMany(models.Product, { foreignKey: 'productId', onDelete: 'CASCADE', hooks: true })
      Order.belongsTo(models.User, { foreignKey: 'userId' })
      // join table
      Order.belongsToMany(models.Product, { through: models.OrderDetail })
    }
  }


  Order.init(
  {
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    status: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        len: [5, 50],
      }
    },
    total: {
      allowNull: false,
      type: DataTypes.FLOAT,
      validate: {
        min: 0
      },
    },
  },


  {
    sequelize,
    modelName: 'Order',
  });


  return Order;
};
