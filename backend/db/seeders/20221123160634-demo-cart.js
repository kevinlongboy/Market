'use strict';
// /** @type {import('sequelize-cli').Migration} */

const demoCart = [
  { id: 1 }
]


module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Carts',
      demoCart,
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      'Carts',
      { id: 1 },
      {}
    )
  }
};
