'use strict';
/** @type {import('sequelize-cli').Migration} */

// const demoCart = [
//   { id: 1 }
// ]

const demoFavorites = [
  {
    userId: 1,
    productId: 61,
  },
  {
    userId: 1,
    productId: 52,
  },
  {
    userId: 1,
    productId: 42,
  },
  {
    userId: 1,
    productId: 48,
  },
  {
    userId: 1,
    productId: 72,
  },
  {
    userId: 1,
    productId: 6,
  },
]

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Favorites',
      demoFavorites,
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      'Favorites',
      { userId: 1 },
      {}
    )
  }
};
