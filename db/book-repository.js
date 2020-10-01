const { Book } = require('./models');

class NullBook {
  isValid() { return false; }
  toSafeObject() { return {}; }
}

async function create(details) {
  const book = await Book.build(details);
  return await book.save();
}

async function findAll() {
  const books = await Book.findAll();
  return books || new NullBook();
}

async function findByTitle(title) {
  const books = await Book.findAll({ where: { title } });
  return books || new NullBook();
}

async function findByAuthor(author) {
  const books = await Book.findAll({ where: { author } });
  return books || new NullBook();
}

async function findById(id) {
  const book = await Book.findByPk(id);
  return book || new NullBook();
}

module.exports = {
  create,
  findAll,
  findByTitle,
  findByAuthor,
  findById,
};
