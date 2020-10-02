'use strict';

function r(o) {
  o.createdAt = new Date();
  o.updatedAt = new Date();
  return o;
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Books', [
      r({ userId: 0, bookId: 0}),
      r({ userId: 0, bookId: 1}),
      r({ userId: 1, bookId: 2}),
      r({ userId: 1, bookId: 3}),
      r({ userId: 2, bookId: 4}),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Books');
  }
};
