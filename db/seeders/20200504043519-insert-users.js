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
      r({ email: 'demo@example.com', hashedPassword: createPassword(), firstName: 'Demo', lastName: 'User', location: 'Somewhere, US' }),
      r({ email: 'demo1@example.com', hashedPassword: createPassword(), firstName: 'Demo', lastName: 'User1', location: 'Somewhere, US'}),
      r({ email: 'demo2@example.com', hashedPassword: createPassword(), firstName: 'Demo', lastName: 'User2', location: 'Somewhere, US'}),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users');
  }
};
