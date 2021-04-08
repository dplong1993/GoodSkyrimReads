"use strict";
module.exports = (sequelize, DataTypes) => {
  const ToRead = sequelize.define(
    "ToRead",
    {
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      bookId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {}
  );
  ToRead.associate = function (models) {
    // associations can be defined here
    ToRead.belongsTo(models.User, {
      foreignKey: "userId",
      onDelete: "CASCADE",
    });
    ToRead.belongsTo(models.Book, {
      foreignKey: "bookId",
      onDelete: "CASCADE",
    });
  };

  ToRead.prototype.toSafeObject = function () {
    return {
      id: this.id,
      userId: this.userId,
      bookId: this.bookId,
    };
  };
  return ToRead;
};
