"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Reads", [
      { userId: 1, bookId: 1 },
      { userId: 1, bookId: 2 },
      { userId: 2, bookId: 3 },
      { userId: 2, bookId: 4 },
      { userId: 3, bookId: 5 },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Reads");
  },
};
