const express = require('express');
const asyncHandler = require('express-async-handler');
const { check, validationResult } = require('express-validator');

const BookRepository = require('../../db/book-repository');
const { authenticated } = require('./security-utils');

const router = express.Router();

const name =
  check('title')
    .not().isEmpty()
    .withMessage('Please provide a book title');

const decription =
  check('description')
    .not().isEmpty()
    .withMessage('Please provide a book description');

const author =
  check('author')
    .not().isEmpty()
    .withMessage('Please provide an author name');

const coverPhotoUrl =
  check('coverPhotoUrl')
    .not().isEmpty()
    .withMessage('Please provide a cover photo url for the book');

// router.post('/', email, password, name, asyncHandler(async function (req, res, next) {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//     return next({ status: 422, errors: errors.array() });
//     }

//     const user = await UserRepository.create(req.body);

//     const { jti, token } = generateToken(user);
//     user.tokenId = jti;
//     await user.save();
//     res.cookie("token", token);
//     res.json({ token, user: user.toSafeObject() });
// }));

router.get('/', authenticated, asyncHandler(async function(_req, res) {
  const books = await BookRepository.findAll();
  res.json(books);
}));

module.exports = router;
