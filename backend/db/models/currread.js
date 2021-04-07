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
    },
    {}
  );
  CurrRead.associate = function (models) {
    // associations can be defined here
    CurrRead.belongsTo(models.User, { foreignKey: "userId" });
    CurrRead.belongsTo(models.Book, { foreignKey: "bookId" });
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
