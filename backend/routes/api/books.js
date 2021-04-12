const express = require("express");
const asyncHandler = require("express-async-handler");
const { Op } = require("sequelize");
const { check, validationResult } = require("express-validator");
const { Book, Read, CurrRead, ToRead } = require("../../db/models");

const router = express.Router();

const name = check("title")
  .not()
  .isEmpty()
  .withMessage("Please provide a book title");

const decription = check("description")
  .not()
  .isEmpty()
  .withMessage("Please provide a book description");

const author = check("author")
  .not()
  .isEmpty()
  .withMessage("Please provide an author name");

const coverPhotoUrl = check("coverPhotoUrl")
  .not()
  .isEmpty()
  .withMessage("Please provide a cover photo url for the book");

router.get(
  "/",
  asyncHandler(async function (_req, res) {
    const books = await Book.findAll();
    res.json(books);
  })
);

// router.get(
//   "/users/:id",
//   asyncHandler(async function (_req, res) {
//     const books = await Book.findAll({
//       include: [
//         { model: Read, where: { userId: { [Op.eq]: req.params.id } } },
//         { model: CurrRead },
//         { model: ToRead },
//       ],
//     });
//     res.json(books);
//   })
// );

router.get(
  "/:id",
  asyncHandler(async function (req, res) {
    const book = await Book.findByPk(req.params.id);
    res.json(book);
  })
);

module.exports = router;
