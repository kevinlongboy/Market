'use strict';
/** @type {import('sequelize-cli').Migration} */


module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.addColumn(
      'ProductImages',
      'productId',
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'Products'}
      }
    )
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface,removeColumn(
      'ProductImages',
      'productId'
    )
  }
};
