"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("CurrReads", [
      { userId: 1, bookId: 3, shelfName: "curr-read" },
      { userId: 2, bookId: 5, shelfName: "curr-read" },
      { userId: 3, bookId: 3, shelfName: "curr-read" },
      { userId: 3, bookId: 4, shelfName: "curr-read" },
      { userId: 3, bookId: 2, shelfName: "curr-read" },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Reads");
  },
};
