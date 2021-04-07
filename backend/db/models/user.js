"use strict";
const { Validator } = require("sequelize");
const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [3, 30],
          isNotEmail(value) {
            if (Validator.isEmail(value)) {
              throw new Error("Cannot be an email.");
            }
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [3, 256],
        },
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [2, 30],
        },
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [2, 30],
        },
      },
      hashedPassword: {
        type: DataTypes.STRING.BINARY,
        allowNull: false,
        validate: {
          len: [60, 60],
        },
      },
    },
    {
      defaultScope: {
        attributes: {
          exclude: [
            "hashedPassword",
            "email",
            "lastName",
            "firstName",
            "createdAt",
            "updatedAt",
          ],
        },
      },
      scopes: {
        currentUser: {
          attributes: { exclude: ["hashedPassword"] },
        },
        loginUser: {
          attributes: {},
        },
      },
    }
  );
  User.associate = function (models) {
    User.hasMany(models.Read, { foreignKey: "userId" });
    User.belongsToMany(models.Book, {
      as: "ReadBooks",
      through: models.Read,
      foreignKey: "userId",
      otherKey: "bookId",
    });
    User.hasMany(models.ToRead, { foreignKey: "userId" });
    User.belongsToMany(models.Book, {
      as: "ToReadBooks",
      through: models.ToRead,
      foreignKey: "userId",
      otherKey: "bookId",
    });
    User.hasMany(models.CurrRead, { foreignKey: "userId" });
    User.belongsToMany(models.Book, {
      as: "CurrReadBooks",
      through: models.CurrRead,
      foreignKey: "userId",
      otherKey: "bookId",
    });
  };
  User.prototype.toSafeObject = function () {
    // remember, this cannot be an arrow function
    const { id, username, email, lastName, firstName } = this; // context will be the User instance
    return { id, username, email, lastName, firstName };
  };
  User.prototype.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString());
  };
  User.getCurrentUserById = async function (id) {
    return await User.scope("currentUser").findByPk(id);
  };
  User.login = async function ({ credential, password }) {
    const { Op } = require("sequelize");
    const user = await User.scope("loginUser").findOne({
      where: {
        [Op.or]: {
          username: credential,
          email: credential,
        },
      },
    });
    if (user && user.validatePassword(password)) {
      return await User.scope("currentUser").findByPk(user.id);
    }
  };
  User.signup = async function ({
    username,
    email,
    password,
    lastName,
    firstName,
  }) {
    const hashedPassword = bcrypt.hashSync(password);
    const user = await User.create({
      username,
      email,
      hashedPassword,
      lastName,
      firstName,
    });
    return await User.scope("currentUser").findByPk(user.id);
  };
  return User;
};
