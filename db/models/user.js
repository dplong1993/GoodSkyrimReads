'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      validates: {
        isEmail: true,
        len: [3, 255],
      }
    },
    hashedPassword: {
      allowNull: false,
      type: DataTypes.STRING.BINARY,
      validates: {
        len: [60, 60],
      },
    },
    firstName: {
      allowNull: false,
      type: DataTypes.STRING,
      validates: {
        len: [1, 50],
      },
    },
    lastName: {
      allowNull: false,
      type: DataTypes.STRING,
      validates: {
        len: [1, 50],
      },
    },
    location: {
      allowNull: false,
      type: DataTypes.STRING,
      validates: {
        len: [5, 50],
      },
    },
    tokenId: {
      type: DataTypes.STRING
    }
  }, {});

  User.associate = function(models) {
  };

  return User;
};
