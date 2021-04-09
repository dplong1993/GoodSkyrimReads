const express = require("express");
const asyncHandler = require("express-async-handler");
const { check, validationResult } = require("express-validator");
const { Read, ToRead, CurrRead } = require("../../db/models");

const router = express.Router();

// router.get(
//   "/",
//   asyncHandler(async function (_req, res) {
//     const books = await Book.findAll();
//     res.json(books);
//   })
// );

// router.get(
//   "/:id",
//   asyncHandler(async function (req, res) {
//     const book = await Book.findByPk(req.params.id);
//     res.json(book);
//   })
// );

router.post(
  "/read",
  asyncHandler(async function (req, res) {
    const { bookId, userId } = req.body;
    console.log("IN SHELVES AAAAAAAAAAAAAAAAAAAAAAAAA");
    const newShelfEntry = await Read.newEntry({
      bookId,
      userId,
    });
    return res.json({
      newShelfEntry,
    });
  })
);

module.exports = router;
