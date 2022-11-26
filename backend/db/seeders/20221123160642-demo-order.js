'use strict';

// const demoOrders = [
//   {
//     id: 1,
//     userId: 1,
//     status: "Fulfilled",
//     total: ,
//   },
//   {
//     id: 2,
//     userId: 2,
//     status: "Fulfilled",
//     total: ,
//   },
// ]

// const demoOrderDetails = [
//   // demo
//   {
//     orderId: 1,
//     productId: ,
//   },
//   // Bill
//   {
//     orderId: 2,
//     productId: ,
//   },
//   // Shane
//   {
//     orderId: 3,
//     productId: ,
//   },
//   // Geoffrey
//   {
//     orderId: 4,
//     productId: ,
//   },
//   // Dan
//   {
//     orderId: 5,
//     productId: 26,
//   },
//   // Brad
//   {
//     orderId: 6,
//     productId: ,
//   },
//   // Hector
//   {
//     orderId: 7,
//     productId: 27,
//   },
//   // Cody
//   {
//     orderId: 8,
//     productId: 46,
//   },
//   // Cameron
//   {
//     orderId: 9,
//     productId: ,
//   },
//   // Peter
//   {
//     orderId: 10,
//     productId: ,
//   },
//   // Braxton
//   {
//     orderId: 11,
//     productId: ,
//   },
//   // Jesse
//   {
//     orderId: 12,
//     productId: ,
//   },
//   // Jojo
//   {
//     orderId: 13,
//     productId: ,
//   },
//   // Nick
//   {
//     orderId: 14,
//     productId: ,
//   },
//   // Andrew
//   {
//     orderId: 15,
//     productId: ,
//   },
//   // Ari
//   {
//     orderId: 16,
//     productId: ,
//   },
//   // Sam
//   {
//     orderId: 17,
//     productId: ,
//   },
//   // Tanner
//   {
//     orderId: 18,
//     productId: ,
//   },
//   // Olivia
//   {
//     orderId: 19,
//     productId: ,
//   },
//   // Nate
//   {
//     orderId: 20,
//     productId: ,
//   },
//   // Daniel
//   {
//     orderId: 21,
//     productId: ,
//   },
//   // Alex
//   {
//     orderId: 22,
//     productId: ,
//   },
//   // Sherry
//   {
//     orderId: 23,
//     productId: ,
//   },
//   // Rawaha
//   {
//     orderId: 24,
//     productId: ,
//   },
//   // Whit
//   {
//     orderId: 25,
//     productId: ,
//   },
//   // Daniel
//   {
//     orderId: 26,
//     productId: ,
//   },
//   // David
//   {
//     orderId: 27,
//     productId: ,
//   },
//   // John
//   {
//     orderId: 28,
//     productId: ,
//   },
//   // Andrew
//   {
//     orderId: 29,
//     productId: ,
//   },
//   // Cesar
//   {
//     orderId: 30,
//     productId: ,
//   },
//   // Ryan
//   {
//     orderId: 31,
//     productId: ,
//   },
//   // Anthony
//   {
//     orderId: 32,
//     productId: ,
//   },
//   // Franco
//   {
//     orderId: 33,
//     productId: ,
//   },
//   // Kevin
//   {
//     orderId: 34,
//     productId: ,
//   },
//   // David D.
//   {
//     orderId: 35,
//     productId: ,
//   },
//   // Drew
//   {
//     orderId: 36,
//     productId: ,
//   },
//   // David R.
//   {
//     orderId: 37,
//     productId: 16,
//   },
//   // Jair
//   {
//     orderId: 38,
//     productId: ,
//   },
//   // Tiffany
//   {
//     orderId: 39,
//     productId: ,
//   },
//   // Daniel
//   {
//     orderId: 40,
//     productId: ,
//   },
//   // Gary
//   {
//     orderId: 41,
//     productId: ,
//   },
//   // Jake
//   {
//     orderId: 42,
//     productId: ,
//   },
//   // John
//   {
//     orderId: 43,
//     productId: ,
//   },
//   // Maliha
//   {
//     orderId: 44,
//     productId: ,
//   },
//   // Thenu
//   {
//     orderId: 45,
//     productId: ,
//   },
//   // Brennon
//   {
//     orderId: 46,
//     productId: ,
//   },
//   // Andrew
//   {
//     orderId: 47,
//     productId: ,
//   },
//   // Adam
//   {
//     orderId: 48,
//     productId: ,
//   },
//   // Chris
//   {
//     orderId: 49,
//     productId: ,
//   },
//   // Christo
//   {
//     orderId: 50,
//     productId: ,
//   },
//   // Cindy
//   {
//     orderId: 51,
//     productId: ,
//   },
//   // David
//   {
//     orderId: 52,
//     productId: ,
//   },
//   // Eliza
//   {
//     orderId: 53,
//     productId: ,
//   },
//   // James
//   {
//     orderId: 54,
//     productId: ,
//   },
//   // Jason
//   {
//     orderId: 55,
//     productId: ,
//   },
//   // Joanna
//   {
//     orderId: 56,
//     productId: ,
//   },
//   // Max
//   {
//     orderId: 57,
//     productId: ,
//   },
//   // Moran
//   {
//     orderId: 58,
//     productId: ,
//   },
//   // Yasha
//   {
//     orderId: 59,
//     productId: ,
//   },
//   // Yibo
//   {
//     orderId: 60,
//     productId: ,
//   },
//   // Alex
//   {
//     orderId: 61,
//     productId: ,
//   },
//   // //
//   // {
//   //   orderId: ,
//   //   productId: ,
//   // },
// ]

/** @type {import('sequelize-cli').Migration} */
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
