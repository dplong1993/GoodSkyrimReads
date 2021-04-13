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
  Read.associate = function (models) {
    Read.belongsTo(models.User, { foreignKey: "userId", onDelete: "CASCADE" });
    Read.belongsTo(models.Book, { foreignKey: "bookId", onDelete: "CASCADE" });
  };

  Read.prototype.toSafeObject = function () {
    return {
      id: this.id,
      userId: this.userId,
      bookId: this.bookId,
    };
  };

  Read.newEntry = async function ({ bookId, userId }) {
    const newEntry = await Read.create({
      bookId,
      userId,
      shelfName: "read",
    });
    return await Read.findByPk(newEntry.id);
  };

  Read.deleteEntry = async function ({ bookId, userId }) {
    const deletedEntry = await Read.destroy({
      where: {
        userId,
        bookId,
      },
    });
    return deletedEntry;
  };

  return Read;
};
