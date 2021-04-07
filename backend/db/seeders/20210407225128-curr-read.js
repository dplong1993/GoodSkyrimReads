"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("CurrReads", [
      { userId: 1, bookId: 3 },
      { userId: 2, bookId: 5 },
      { userId: 3, bookId: 3 },
      { userId: 3, bookId: 4 },
      { userId: 3, bookId: 2 },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Reads");
  },
};
