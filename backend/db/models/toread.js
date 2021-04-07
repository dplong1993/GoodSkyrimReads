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
    ToRead.belongsTo(models.User, { foreignKey: "userId" });
    ToRead.belongsTo(models.Book, { foreignKey: "bookId" });
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
