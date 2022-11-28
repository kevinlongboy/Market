'use strict';
// /** @type {import('sequelize-cli').Migration} */

const demoOrderDetails = [
  // demo
  // total: 17.98
  {
    orderId: 1,
    productId: 24,
  },
  {
    orderId: 1,
    productId: 6,
  },
  // Bill
  // total: 1299.99
  {
    orderId: 2,
    productId: 32,
  },
  // Shane
  // 285.25
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
  // 2569.97
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
  // 2552.47
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
  // 177.36
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
  // 253.78
  {
    orderId: 7,
    productId: 27,
  },
  {
    orderId: 7,
    productId: 33,
  },
  // Cody
  // 274.87
  {
    orderId: 8,
    productId: 46,
  },
  {
    orderId: 8,
    productId: 47,
  },
  {
    orderId: 8,
    productId: 33,
  },
  // Cameron
  // 1320.98
  {
    orderId: 9,
    productId: 30,
  },
  {
    orderId: 9,
    productId: 32,
  },
  // Peter
  // 7.00
  {
    orderId: 10,
    productId: 10,
  },
  // Braxton
  // 2525.98
  {
    orderId: 11,
    productId: 44,
  },
  {
    orderId: 11,
    productId: 31,
  },
  // Jesse
  // 26.48
  {
    orderId: 12,
    productId: 48,
  },
  {
    orderId: 12,
    productId: 50,
  },
  // Jojo
  // 18.48
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
  // 2897.96
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
  // 525.98
  {
    orderId: 15,
    productId: 44,
  },
  {
    orderId: 15,
    productId: 39,
  },
  // Ari
  // 109.27
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
  // 10.97
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
  // 139.99
  {
    orderId: 18,
    productId: 41,
  },
  // Olivia
  // 279.98
  {
    orderId: 19,
    productId: 12,
  },
  {
    orderId: 19,
    productId: 33,
  },
  // Nate
  // 2879.34
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
  // 99.99
  {
    orderId: 21,
    productId: 34,
  },
  // Alex Pezzati
  // 188.77
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
  // 10.28
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
  // 1333.97
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
  // 22.99
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
  // 4299.97
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
  // 1317.98
  {
    orderId: 27,
    productId: 4,
  },
  {
    orderId: 27,
    productId: 32,
  },
  // John Lee
  // 499.99
  {
    orderId: 28,
    productId: 40,
  },
  // Andrew Tran
  // 2.89
  {
    orderId: 29,
    productId: 46,
  },
  // Cesar
  // 1299.99
  {
    orderId: 30,
    productId: 32,
  },
  // Ryan Schneider
  // 1299.99
  {
    orderId: 31,
    productId: 32,
  },
  // Anthony
  // 82.47
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
  // 599.98
  {
    orderId: 33,
    productId: 36,
  },
  {
    orderId: 33,
    productId: 39,
  },
  // Kevin
  // 999.98
  {
    orderId: 34,
    productId: 39,
  },
  {
    orderId: 34,
    productId: 40,
  },
  // David DeHerrera
  // 239.98
  {
    orderId: 35,
    productId: 36,
  },
  {
    orderId: 35,
    productId: 41,
  },
  // Drew
  // 110.27
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
  // 111.76
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
  // 389.98
  {
    orderId: 38,
    productId: 41,
  },
  {
    orderId: 38,
    productId: 33,
  },
  // Tiffany
  // 46.99
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
  // 139.99
  {
    orderId: 40,
    productId: 41,
  },
  // Gary
  // 370.97
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
  // 249.99
  {
    orderId: 42,
    productId: 33,
  },
  // John
  // 105.38
  {
    orderId: 43,
    productId: 23,
  },
  {
    orderId: 43,
    productId: 36,
  },
  // Maliha
  // 559.99
  {
    orderId: 44,
    productId: 53,
  },
  // Thenu
  // 199.98
  {
    orderId: 45,
    productId: 54,
  },
  {
    orderId: 45,
    productId: 34,
  },
  // Brennon
  // 30.48
  {
    orderId: 46,
    productId: 28,
  },
  {
    orderId: 46,
    productId: 44,
  },
  // Andrew Kim
  // 21.00
  {
    orderId: 47,
    productId: 57,
  },
  // Adam Selki
  // 389.98
  {
    orderId: 48,
    productId: 33,
  },
  {
    orderId: 48,
    productId: 41,
  },
  // Chris P
  // 5329.91
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
  {
    orderId: 49,
    productId: 38,
  },
  {
    orderId: 49,
    productId: 39,
  },
  // Christo
  // 1859.98
  {
    orderId: 50,
    productId: 32,
  },
  {
    orderId: 50,
    productId: 53,
  },
  // Cindy
  // 20.99
  {
    orderId: 51,
    productId: 30,
  },
  // David Burch
  // 55.99
  {
    orderId: 52,
    productId: 30,
  },
  {
    orderId: 52,
    productId: 55,
  },
  // Eliza
  // 1092.96
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
  // 20.99
  {
    orderId: 54,
    productId: 30,
  },
  // Jason Kong
  // 313.97
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
  // 24.88
  {
    orderId: 56,
    productId: 47,
  },
  {
    orderId: 56,
    productId: 46,
  },
  // Max
  // 699.99
  {
    orderId: 57,
    productId: 43,
  },
  // Moran
  // 38.87
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
  // 49.98
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
  // 1561.85
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
  // 249.99
  {
    orderId: 61,
    productId: 33,
  },
  // Demo (second order)
  // 1299.99
  {
    orderId: 62,
    productId: 32,
  },
  // //
  // {
  //   orderId: ,
  //   productId: ,
  // },
]

let orderIds = [];
demoOrderDetails.forEach(order => {
  if (!orderIds.includes(order.orderId)) {
    orderIds.push(order.orderId)
  }
})

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'OrderDetails',
      demoOrderDetails
    )
  },

  async down (queryInterface, Sequelize) {
    const Op = Sequelize.Op;
    await queryInterface.bulkDelete(
      'OrderDetails',
      { orderId: { [Op.in]: orderIds } }
    )
  }
};
