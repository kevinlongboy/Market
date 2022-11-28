'use strict';
/** @type {import('sequelize-cli').Migration} */


module.exports = {

  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('OrderDetails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      orderId: {
        // allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Orders' },
        onDelete: 'CASCADE'
      },
      productId: {
        // allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Products' },
        onDelete: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
    });
  },


  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('OrderDetails');
  }
};
