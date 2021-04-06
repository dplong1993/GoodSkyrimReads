"use strict";
module.exports = (sequelize, DataTypes) => {
  const Read = sequelize.define(
    "Read",
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
  Read.associate = function (models) {
    Read.belongsTo(models.User, { foreignKey: "userId" });
    Read.belongsTo(models.Book, { foreignKey: "bookId" });
  };

  Read.prototype.toSafeObject = function () {
    return {
      id: this.id,
      userId: this.userId,
      bookId: this.bookId,
    };
  };

  return Read;
};
