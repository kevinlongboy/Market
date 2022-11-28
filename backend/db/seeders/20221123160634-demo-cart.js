'use strict';
// /** @type {import('sequelize-cli').Migration} */

// const demoCart = [
//   { id: 1 }
// ]

const demoCart = [
  {
    userId: 1,
    productId: 1,
  },
  {
    userId: 1,
    productId: 1,
  },
  {
    userId: 1,
    productId: 30,
  },
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
      // { id: 1 },
      { userId: 1 },
      {}
    )
  }
};
