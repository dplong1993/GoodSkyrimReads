"use strict";
module.exports = (sequelize, DataTypes) => {
  const CurrRead = sequelize.define(
    "CurrRead",
    {
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      bookId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      shelfName: {
        allowNull: false,
        type: DataTypes.STRING,
        validates: {
          len: [3, 15],
        },
      },
    },
    {}
  );
  CurrRead.associate = function (models) {
    // associations can be defined here
    CurrRead.belongsTo(models.User, {
      foreignKey: "userId",
      onDelete: "CASCADE",
    });
    CurrRead.belongsTo(models.Book, {
      foreignKey: "bookId",
      onDelete: "CASCADE",
    });
  };

  CurrRead.prototype.toSafeObject = function () {
    return {
      id: this.id,
      userId: this.userId,
      bookId: this.bookId,
    };
  };
  return CurrRead;
};
