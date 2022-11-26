'use strict';
// /** @type {import('sequelize-cli').Migration} */

const demoOrderDetails = [
  // demo
  {
    orderId: 1,
    productId: 24,
  },
  {
    orderId: 1,
    productId: 6,
  },
  // Bill
  {
    orderId: 2,
    productId: 32,
  },
  // Shane
  {
    orderId: 3,
    productId: 3,
  },
  {
    orderId: 3,
    productId: 33,
  },
  {
    orderId: 3,
    productId: 50,
  },
  {
    orderId: 3,
    productId: 48,
  },
  {
    orderId: 3,
    productId: 22,
  },
  // Geoffrey
  {
    orderId: 4,
    productId: 31,
  },
  {
    orderId: 4,
    productId: 45,
  },
  {
    orderId: 4,
    productId: 18,
  },
  // Dan
  {
    orderId: 5,
    productId: 26,
  },
  {
    orderId: 5,
    productId: 31,
  },
  {
    orderId: 5,
    productId: 56,
  },
  // Brad
  {
    orderId: 6,
    productId: 16,
  },
  {
    orderId: 6,
    productId: 34,
  },
  {
    orderId: 6,
    productId: 56,
  },
  {
    orderId: 6,
    productId: 9,
  },
  // Hector
  {
    orderId: 7,
    productId: 27,
  },
  {
    orderId: 7,
    productId: 33,
  },
  // Cody
  {
    orderId: 8,
    productId: 46,
  },
  {
    orderId: 8,
    productId: 47,
  },
  {
    orderId: 7,
    productId: 33,
  },
  // Cameron
  {
    orderId: 9,
    productId: 30,
  },
  {
    orderId: 9,
    productId: 32,
  },
  // Peter
  {
    orderId: 10,
    productId: 10,
  },
  // Braxton
  {
    orderId: 11,
    productId: 44,
  },
  // Jesse
  {
    orderId: 12,
    productId: 48,
  },
  {
    orderId: 12,
    productId: 50,
  },
  // Jojo
  {
    orderId: 13,
    productId: 2,
  },
  {
    orderId: 13,
    productId: 15,
  },
  {
    orderId: 13,
    productId: 25,
  },
  // Nick
  {
    orderId: 14,
    productId: 31,
  },
  {
    orderId: 14,
    productId: 35,
  },
  {
    orderId: 14,
    productId: 38,
  },
  {
    orderId: 14,
    productId: 42,
  },
  // Andrew Fava
  {
    orderId: 15,
    productId: 44,
  },
  {
    orderId: 15,
    productId: 39,
  },
  // Ari
  {
    orderId: 16,
    productId: 54,
  },
  {
    orderId: 16,
    productId: 29,
  },
  {
    orderId: 16,
    productId: 13,
  },
  // Sam
  {
    orderId: 17,
    productId: 25,
  },
  {
    orderId: 17,
    productId: 28,
  },
  {
    orderId: 17,
    productId: 2,
  },
  // Tanner
  {
    orderId: 18,
    productId: 41,
  },
  // Olivia
  {
    orderId: 19,
    productId: 12,
  },
  {
    orderId: 19,
    productId: 33,
  },
  // Nate
  {
    orderId: 20,
    productId: 31,
  },
  {
    orderId: 20,
    productId: 42,
  },
  {
    orderId: 20,
    productId: 38,
  },
  {
    orderId: 20,
    productId: 19,
  },
  {
    orderId: 20,
    productId: 20,
  },
  {
    orderId: 20,
    productId: 28,
  },
  // Daniel Chin
  {
    orderId: 21,
    productId: 34,
  },
  // Alex Pezzati
  {
    orderId: 22,
    productId: 21,
  },
  {
    orderId: 22,
    productId: 56,
  },
  {
    orderId: 22,
    productId: 41,
  },
  // Sherry
  {
    orderId: 23,
    productId: 58,
  },
  {
    orderId: 23,
    productId: 5,
  },
  {
    orderId: 23,
    productId: 1,
  },
  // Rawaha
  {
    orderId: 24,
    productId: 32,
  },
  {
    orderId: 24,
    productId: 49,
  },
  {
    orderId: 24,
    productId: 52,
  },
  // Whit
  {
    orderId: 25,
    productId: 58,
  },
  {
    orderId: 25,
    productId: 15,
  },
  {
    orderId: 25,
    productId: 26,
  },
  // Daniel Flores
  {
    orderId: 26,
    productId: 31,
  },
  {
    orderId: 26,
    productId: 32,
  },
  {
    orderId: 26,
    productId: 40,
  },
  // David Nash
  {
    orderId: 27,
    productId: 4,
  },
  {
    orderId: 27,
    productId: 32,
  },
  // John Lee
  {
    orderId: 28,
    productId: 40,
  },
  // Andrew Tran
  {
    orderId: 29,
    productId: 46,
  },
  // Cesar
  {
    orderId: 30,
    productId: 32,
  },
  // Ryan
  {
    orderId: 31,
    productId: 32,
  },
  // Anthony
  {
    orderId: 32,
    productId: 26,
  },
  {
    orderId: 32,
    productId: 56,
  },
  {
    orderId: 32,
    productId: 35,
  },
  // Franco
  {
    orderId: 33,
    productId: 36,
  },
  {
    orderId: 33,
    productId: 39,
  },
  // Kevin
  {
    orderId: 34,
    productId: 39,
  },
  {
    orderId: 34,
    productId: 40,
  },
  // David DeHerrera
  {
    orderId: 35,
    productId: 36,
  },
  {
    orderId: 35,
    productId: 41,
  },
  // Drew
  {
    orderId: 36,
    productId: 20,
  },
  {
    orderId: 36,
    productId: 22,
  },
  {
    orderId: 36,
    productId: 34,
  },
  // David Rogers
  {
    orderId: 37,
    productId: 16,
  },
  {
    orderId: 37,
    productId: 51,
  },
  {
    orderId: 37,
    productId: 14,
  },
  {
    orderId: 37,
    productId: 13,
  },
  // Jair
  {
    orderId: 38,
    productId: 41,
  },
  {
    orderId: 38,
    productId: 33,
  },
  // Tiffany
  {
    orderId: 39,
    productId: 30,
  },
  {
    orderId: 39,
    productId: 57,
  },
  {
    orderId: 39,
    productId: 58,
  },
  // Daniel Lam
  {
    orderId: 40,
    productId: 41,
  },
  // Gary
  {
    orderId: 41,
    productId: 37,
  },
  {
    orderId: 41,
    productId: 30,
  },
  {
    orderId: 41,
    productId: 36,
  },
  // Jake
  {
    orderId: 42,
    productId: 33,
  },
  // John
  {
    orderId: 43,
    productId: 23,
  },
  {
    orderId: 43,
    productId: 36,
  },
  // Maliha
  {
    orderId: 44,
    productId: 53,
  },
  // Thenu
  {
    orderId: 45,
    productId: 54,
  },
  {
    orderId: 45,
    productId: 34,
  },
  // Brennon
  {
    orderId: 46,
    productId: 28,
  },
  {
    orderId: 46,
    productId: 44,
  },
  // Andrew Kim
  {
    orderId: 47,
    productId: 57,
  },
  // Adam Selki
  {
    orderId: 48,
    productId: 33,
  },
  {
    orderId: 48,
    productId: 41,
  },
  // Chris P
  {
    orderId: 49,
    productId: 31,
  },
  {
    orderId: 49,
    productId: 32,
  },
  {
    orderId: 49,
    productId: 33,
  },
  {
    orderId: 49,
    productId: 34,
  },
  {
    orderId: 49,
    productId: 35,
  },
  {
    orderId: 49,
    productId: 36,
  },
  {
    orderId: 49,
    productId: 37,
  },
  // Christo
  {
    orderId: 50,
    productId: 32,
  },
  {
    orderId: 50,
    productId: 53,
  },
  // Cindy
  {
    orderId: 51,
    productId: 30,
  },
  // David Burch
  {
    orderId: 52,
    productId: 30,
  },
  {
    orderId: 52,
    productId: 55,
  },
  // Eliza
  {
    orderId: 53,
    productId: 15,
  },
  {
    orderId: 53,
    productId: 17,
  },
  {
    orderId: 53,
    productId: 30,
  },
  {
    orderId: 53,
    productId: 53,
  },
  {
    orderId: 53,
    productId: 54,
  },
  // James Lee
  {
    orderId: 54,
    productId: 30,
  },
  // Jason Kong
  {
    orderId: 55,
    productId: 52,
  },
  {
    orderId: 55,
    productId: 11,
  },
  {
    orderId: 55,
    productId: 9,
  },
  {
    orderId: 55,
    productId: 33,
  },
  {
    orderId: 55,
    productId: 55,
  },
  // Joanna
  {
    orderId: 56,
    productId: 47,
  },
  {
    orderId: 56,
    productId: 46,
  },
  // Max
  {
    orderId: 57,
    productId: 43,
  },
  // Moran
  {
    orderId: 58,
    productId: 9,
  },
  {
    orderId: 58,
    productId: 30,
  },
  {
    orderId: 58,
    productId: 7,
  },
  {
    orderId: 58,
    productId: 8,
  },
  // Yasha
  {
    orderId: 59,
    productId: 30,
  },
  {
    orderId: 59,
    productId: 15,
  },
  {
    orderId: 59,
    productId: 45,
  },
  // Yibo
  {
    orderId: 60,
    productId: 33,
  },
  {
    orderId: 60,
    productId: 32,
  },
  {
    orderId: 60,
    productId: 28,
  },
  {
    orderId: 60,
    productId: 29,
  },
  {
    orderId: 60,
    productId: 3,
  },
  // Alex
  {
    orderId: 61,
    productId: 33,
  },
  // //
  // {
  //   orderId: ,
  //   productId: ,
  // },
]

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
