"use strict";
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define(
    "Book",
    {
      title: {
        allowNull: false,
        type: DataTypes.STRING,
        validates: {
          len: [3, 255],
        },
      },
      description: {
        allowNull: false,
        type: DataTypes.TEXT,
        validates: {
          len: [5, 1500],
        },
      },
      author: {
        allowNull: false,
        type: DataTypes.STRING,
        validates: {
          len: [3, 50],
        },
      },
      bookSeries: {
        allowNull: false,
        type: DataTypes.STRING,
        validates: {
          len: [3, 100],
        },
      },
      coverPhotoUrl: {
        allowNull: false,
        type: DataTypes.STRING,
        validates: {
          isUrl: true,
          len: [0, 1000],
        },
      },
    },
    {}
  );
  Book.associate = function (models) {
    Book.hasMany(models.Read, { foreignKey: "bookId" });
    Book.belongsToMany(models.User, {
      as: "ReadUsers",
      through: models.Read,
      foreignKey: "bookId",
      otherKey: "userId",
    });
    Book.hasMany(models.CurrRead, { foreignKey: "bookId" });
    Book.belongsToMany(models.User, {
      as: "CurrReadUsers",
      through: models.CurrRead,
      foreignKey: "bookId",
      otherKey: "userId",
    });
    Book.hasMany(models.ToRead, { foreignKey: "bookId" });
    Book.belongsToMany(models.User, {
      as: "ToReadUsers",
      through: models.ToRead,
      foreignKey: "bookId",
      otherKey: "userId",
    });
  };

  Book.prototype.isValid = () => true;

  Book.prototype.toSafeObject = function () {
    return {
      author: this.author,
      bookSeries: this.bookSeries,
      coverPhotoUrl: this.coverPhotoUrl,
      createdAt: this.createdAt,
      description: this.description,
      id: this.id,
      title: this.title,
      updatedAt: this.updatedAt,
    };
  };

  return Book;
};
