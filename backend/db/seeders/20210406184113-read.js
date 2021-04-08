"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Reads", [
      { userId: 1, bookId: 1, shelfName: "read" },
      { userId: 1, bookId: 2, shelfName: "read" },
      { userId: 2, bookId: 3, shelfName: "read" },
      { userId: 2, bookId: 4, shelfName: "read" },
      { userId: 3, bookId: 5, shelfName: "read" },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Reads");
  },
};
