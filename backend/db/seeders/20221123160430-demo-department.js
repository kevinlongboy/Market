'use strict';

const department = require("../models/department");

// /** @type {import('sequelize-cli').Migration} */

const demoDepartments = [
  {
    id: 1,
    name: "Personal Care",
  },
  {
    id: 2,
    name: "Home",
  },
  {
    id: 3,
    name: "Kitchen & Dining",
  },
  {
    id: 4,
    name: "Grocery",
  },
  {
    id: 5,
    name: "Electronics",
  },
  {
    id: 6,
    name: "Video Games",
  },
  {
    id: 7,
    name: "Sports & Outdoors",
  },
  {
    id: 8,
    name: "Pets",
  },
  {
    id: 9,
    name: "Furniture",
  },
  {
    id: 10,
    name: "Clearance",
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
