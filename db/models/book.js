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
    coverPhotoUrl: {
      type: DataTypes.STRING,
      //Since this can be null will this work
      validates: {
        len: [0, 1000]
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
