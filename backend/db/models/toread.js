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

  ToRead.newEntry = async function ({ bookId, userId }) {
    const newEntry = await ToRead.create({
      bookId,
      userId,
      shelfName: "to-read",
    });
    return await ToRead.findByPk(newEntry.id);
  };

  ToRead.deleteEntry = async function ({ bookId, userId }) {
    const deletedEntry = await ToRead.destroy({
      where: {
        userId,
        bookId,
      },
    });
    return deletedEntry;
  };

  return ToRead;
};
