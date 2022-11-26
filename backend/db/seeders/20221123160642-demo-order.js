'use strict';
// /** @type {import('sequelize-cli').Migration} */

const demoOrders = [
  // demo
  {
    userId: 1,
    status: "Fulfilled",
    total: 17.98,
  },
  // Bill
  {
    userId: 2,
    status: "Fulfilled",
    total: 1299.99,
  },
  // Shane
  {
    userId: 3,
    status: "Fulfilled",
    total: 285.25,
  },
  // Geoffrey
  {
    userId: 4,
    status: "Fulfilled",
    total: 2569.97,
  },
  // Dan
  {
    userId: 5,
    status: "Fulfilled",
    total: 2552.47,
  },
  // Brad
  {
    userId: 6,
    status: "Fulfilled",
    total: 177.36,
  },
  // Hector
  {
    userId: 7,
    status: "Fulfilled",
    total: 253.78,
  },
  // Cody
  {
    userId: 8,
    status: "Fulfilled",
    total: 274.87,
  },
  // Cameron
  {
    userId: 9,
    status: "Fulfilled",
    total: 1320.98,
  },
  // Peter
  {
    userId: 10,
    status: "Fulfilled",
    total: 7.00,
  },
  // Braxton
  {
    userId: 11,
    status: "Fulfilled",
    total: 2525.98,
  },
  // Jesse
  {
    userId: 12,
    status: "Fulfilled",
    total: 26.48,
  },
  // Jojo
  {
    userId: 13,
    status: "Fulfilled",
    total: 18.48,
  },
  // Nick
  {
    userId: 14,
    status: "Fulfilled",
    total: 2897.96,
  },
  // Andrew
  {
    userId: 15,
    status: "Fulfilled",
    total: 525.98,
  },
  // Ari
  {
    userId: 16,
    status: "Fulfilled",
    total: 109.27,
  },
  // Sam
  {
    userId: 17,
    status: "Fulfilled",
    total: 10.97,
  },
  // Tanner
  {
    userId: 18,
    status: "Fulfilled",
    total: 139.99,
  },
  // Olivia
  {
    userId: 19,
    status: "Fulfilled",
    total: 279.98,
  },
  // Nate
  {
    userId: 20,
    status: "Fulfilled",
    total: 2879.34,
  },
  // Daniel
  {
    userId: 21,
    status: "Fulfilled",
    total: 99.99,
  },
  // Alex
  {
    userId: 22,
    status: "Fulfilled",
    total: 188.77,
  },
  // Sherry
  {
    userId: 23,
    status: "Fulfilled",
    total: 10.28,
  },
  // Rawaha
  {
    userId: 24,
    status: "Fulfilled",
    total: 1333.97,
  },
  // Whit
  {
    userId: 25,
    status: "Fulfilled",
    total: 22.99,
  },
  // Daniel Flores
  {
    userId: 26,
    status: "Fulfilled",
    total: 4299.97,
  },
  // David Nash
  {
    userId: 27,
    status: "Fulfilled",
    total: 1317.98,
  },
  // John Lee
  {
    userId: 28,
    status: "Fulfilled",
    total: 499.99,
  },
  // Andrew Tran
  {
    userId: 29,
    status: "Fulfilled",
    total: 2.89,
  },
  // Cesar
  {
    userId: 30,
    status: "Fulfilled",
    total: 1299.99,
  },
  // Ryan Schneider
  {
    userId: 31,
    status: "Fulfilled",
    total: 1299.99,
  },
  // Anthony
  {
    userId: 32,
    status: "Fulfilled",
    total: 82.47,
  },
  // Franco
  {
    userId: 33,
    status: "Fulfilled",
    total: 599.98,
  },
  // Kevin
  {
    userId: 34,
    status: "Fulfilled",
    total: 999.98,
  },
  // David D.
  {
    userId: 35,
    status: "Fulfilled",
    total: 239.98,
  },
  // Drew
  {
    userId: 36,
    status: "Fulfilled",
    total: 110.27,
  },
  // David R.
  {
    userId: 37,
    status: "Fulfilled",
    total: 111.76,
  },
  // Jair
  {
    userId: 38,
    status: "Fulfilled",
    total: 389.98,
  },
  // Tiffany
  {
    userId: 39,
    status: "Fulfilled",
    total: 46.99,
  },
  // Daniel
  {
    userId: 40,
    status: "Fulfilled",
    total: 139.99,
  },
  // Gary
  {
    userId: 41,
    status: "Fulfilled",
    total: 370.97,
  },
  // Jake
  {
    userId: 42,
    status: "Fulfilled",
    total: 249.99,
  },
  // John
  {
    userId: 43,
    status: "Fulfilled",
    total: 105.38,
  },
  // Maliha
  {
    userId: 44,
    status: "Fulfilled",
    total: 559.99,
  },
  // Thenu
  {
    userId: 45,
    status: "Fulfilled",
    total: 199.98,
  },
  // Brennon
  {
    userId: 46,
    status: "Fulfilled",
    total: 30.48,
  },
  // Andrew
  {
    userId: 47,
    status: "Fulfilled",
    total: 21.00,
  },
  // Adam
  {
    userId: 48,
    status: "Fulfilled",
    total: 389.98,
  },
  // Chris
  {
    userId: 49,
    status: "Fulfilled",
    total: 5329.91,
  },
  // Christo
  {
    userId: 50,
    status: "Fulfilled",
    total: 1859.98,
  },
  // Cindy
  {
    userId: 51,
    status: "Fulfilled",
    total: 20.99,
  },
  // David Burch
  {
    userId: 52,
    status: "Fulfilled",
    total: 55.99,
  },
  // Eliza
  {
    userId: 53,
    status: "Fulfilled",
    total: 1092.96,
  },
  // James
  {
    userId: 54,
    status: "Fulfilled",
    total: 20.99,
  },
  // Jason Kong
  {
    userId: 55,
    status: "Fulfilled",
    total: 313.97,
  },
  // Joanna
  {
    userId: 56,
    status: "Fulfilled",
    total: 24.88,
  },
  // Max
  {
    userId: 57,
    status: "Fulfilled",
    total: 699.99,
  },
  // Moran
  {
    userId: 58,
    status: "Fulfilled",
    total: 38.87,
  },
  // Yasha
  {
    userId: 59,
    status: "Fulfilled",
    total: 49.98,
  },
  // Yibo
  {
    userId: 60,
    status: "Fulfilled",
    total: 1561.85,
  },
  // Alex
  {
    userId: 61,
    status: "Fulfilled",
    total: 249.99,
  },
]

let userIds = [];
demoOrders.forEach(order => userIds.push(order.userId))

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Orders',
      demoOrders,
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      'Orders',
      { userId: { [Op.in]: userIds } },
      {}
    )
  }
};
