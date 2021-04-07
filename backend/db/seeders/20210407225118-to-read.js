"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("ToReads", [
      { userId: 1, bookId: 5 },
      { userId: 1, bookId: 4 },
      { userId: 2, bookId: 1 },
      { userId: 2, bookId: 2 },
      { userId: 3, bookId: 1 },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Reads");
  },
};
