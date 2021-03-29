'use strict';

function r(o) {
  o.createdAt = new Date();
  o.updatedAt = new Date();
  return o;
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reads', [
      r({ userId: 1, bookId: 1}),
      r({ userId: 1, bookId: 2}),
      r({ userId: 2, bookId: 3}),
      r({ userId: 2, bookId: 4}),
      r({ userId: 3, bookId: 5}),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reads');
  }
};
