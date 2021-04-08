"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("ToReads", [
      { userId: 1, bookId: 5, shelfName: "to-read" },
      { userId: 1, bookId: 4, shelfName: "to-read" },
      { userId: 2, bookId: 1, shelfName: "to-read" },
      { userId: 2, bookId: 2, shelfName: "to-read" },
      { userId: 3, bookId: 1, shelfName: "to-read" },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Reads");
  },
};
