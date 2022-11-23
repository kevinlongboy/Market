'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {

  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cart.belongsTo(models.User, { foreignKey: 'userId' }),
      Cart.belongsTo(models.Product, { foreignKey: 'productId' })
    }
  }


  Cart.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },


  }, {
    sequelize,
    modelName: 'Cart',
  });

  
  return Cart;
};
