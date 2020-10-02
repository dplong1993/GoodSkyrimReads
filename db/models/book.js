'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    title: {
      allowNull: false,
      type: DataTypes.STRING,
      validates: {
        len: [3, 255],
      }
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT,
      validates: {
        len: [5, 1500]
      }
    },
    author: {
      allowNull: false,
      type: DataTypes.STRING,
      validates: {
        len: [3, 50]
      }
    },
    bookSeries: {
      allowNull: false,
      type: DataTypes.STRING,
      validates: {
        len: [3, 100]
      }
    },
    coverPhotoUrl: {
      allowNull: false,
      type: DataTypes.STRING,
      validates: {
        isUrl: true,
        len: [0, 1000],
      }
    }
  }, {});
  Book.associate = function(models) {
    // associations can be defined here
  };

  //Ask a question about what this does
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
    }
  }
  return Book;
};
