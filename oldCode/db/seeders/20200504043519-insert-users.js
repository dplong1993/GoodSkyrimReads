'use strict';

const bcrypt = require('bcryptjs');

function createPassword() {
  return bcrypt.hashSync('password');
}

function r(o) {
  o.createdAt = new Date();
  o.updatedAt = new Date();
  return o;
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      r({ email: 'demo@example.com', hashedPassword: createPassword(), name: 'Demo User' }),
      r({ email: 'demo1@example.com', hashedPassword: createPassword(), name: 'Demo User1'}),
      r({ email: 'demo2@example.com', hashedPassword: createPassword(), name: 'Demo User2'}),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users');
  }
};
