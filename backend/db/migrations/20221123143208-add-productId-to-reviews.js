'use strict';
/** @type {import('sequelize-cli').Migration} */


module.exports = {

  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.addColumn(
      'Reviews',
      'productId',
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'Products'}
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface,removeColumn(
      'Reviews',
      'productId'
    )
  }
};
