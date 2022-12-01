'use strict';

const department = require("../models/department");

// /** @type {import('sequelize-cli').Migration} */

const demoDepartments = [
  {
    id: 1,
    name: "Personal Care",
    url: 'https://target.scene7.com/is/image/Target/Beauty181103-190722_1563828945271?wid=315&hei=315&qlt=60&fmt=webp'
  },
  {
    id: 2,
    name: "Home",
    url: 'https://target.scene7.com/is/image/Target/HouseholdEssentials_Tide-200519-1589915606672?wid=315&hei=315&qlt=60&fmt=webp'
  },
  {
    id: 3,
    name: "Kitchen & Dining",
    url: 'https://target.scene7.com/is/image/Target/KitchenDining-210913-1631564122569?wid=315&hei=315&qlt=60&fmt=webp'
  },
  {
    id: 4,
    name: "Grocery",
    url: 'https://target.scene7.com/is/image/Target/Grocery219475-200305_1583423555572?wid=315&hei=315&qlt=60&fmt=webp'
  },
  {
    id: 5,
    name: "Electronics",
    url: 'https://target.scene7.com/is/image/Target/GUEST_e3b11a2a-a085-4693-853f-c19e52073c94?wid=315&hei=315&qlt=60&fmt=webp'
  },
  {
    id: 6,
    name: "Video Games",
    url: 'https://target.scene7.com/is/image/Target/Sept_Wk5-0930-Video_Games-Nintendo-CB-Consoles143381-180910_1536591280324?wid=315&hei=315&qlt=60&fmt=webp'
  },
  {
    id: 7,
    name: "Sports & Outdoors",
    url: 'https://target.scene7.com/is/image/Target/Sports_Outdoors219475-200305_1583425943604?wid=315&hei=315&qlt=60&fmt=webp'
  },
  {
    id: 8,
    name: "Pets",
    url: 'https://target.scene7.com/is/image/Target/Toys219475-200305_1583423532760?wid=315&hei=315&qlt=60&fmt=webp'
  },
  {
    id: 9,
    name: "Furniture",
    url: 'https://target.scene7.com/is/image/Target/Furniture-210913-1631566212856?wid=315&hei=315&qlt=60&fmt=webp'
  },
  {
    id: 10,
    name: "Clearance",
    url: 'https://target.scene7.com/is/image/Target/clearance97188-171020_1508525411214?wid=315&hei=315&qlt=60&fmt=webp'
  },
]

let names = [];
demoDepartments.forEach(department => names.push(department.name))

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Departments',
      demoDepartments,
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      'Departments',
      { name: { [Op.in]: names } },
      {}
    )
  }
};
