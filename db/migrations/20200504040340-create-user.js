'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING(255),
        unique: true,
      },
      hashedPassword: {
        allowNull: false,
        type: Sequelize.STRING(60).BINARY,
      },
      firstName: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },
      lastName: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },
      location: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },
      tokenId: {
        type: Sequelize.STRING(36),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      }
    });
  },
  down: (queryInterface) => {
    return queryInterface.dropTable('Users');
  }
};
