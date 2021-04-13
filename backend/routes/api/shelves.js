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
    const newShelfEntry = await Read.newEntry({
      bookId,
      userId,
    });
    return res.json({
      newShelfEntry,
    });
  })
);

router.post(
  "/currread",
  asyncHandler(async function (req, res) {
    const { bookId, userId } = req.body;
    const newShelfEntry = await CurrRead.newEntry({
      bookId,
      userId,
    });
    return res.json({
      newShelfEntry,
    });
  })
);

router.post(
  "/toread",
  asyncHandler(async function (req, res) {
    const { bookId, userId } = req.body;
    const newShelfEntry = await ToRead.newEntry({
      bookId,
      userId,
    });
    return res.json({
      newShelfEntry,
    });
  })
);

//Highlight this in talking points about project. Used a hyphen separated id to represent an entity
//that needed two identifying parameters
router.delete(
  "/read/:id",
  asyncHandler(async function (req, res) {
    const [userId, bookId] = req.params.id
      .split("-")
      .map((id) => (id = Number(id)));
    const deleteShelfEntry = await Read.deleteEntry({
      bookId,
      userId,
    });
    return res.json({
      deleteShelfEntry,
    });
  })
);

router.delete(
  "/currread/:id",
  asyncHandler(async function (req, res) {
    const [userId, bookId] = req.params.id
      .split("-")
      .map((id) => (id = Number(id)));
    const deleteShelfEntry = await CurrRead.deleteEntry({
      bookId,
      userId,
    });
    return res.json({
      deleteShelfEntry,
    });
  })
);

router.delete(
  "/toread/:id",
  asyncHandler(async function (req, res) {
    const [userId, bookId] = req.params.id
      .split("-")
      .map((id) => (id = Number(id)));
    const deleteShelfEntry = await ToRead.deleteEntry({
      bookId,
      userId,
    });
    return res.json({
      deleteShelfEntry,
    });
  })
);

module.exports = router;
