const express = require('express');
const asyncHandler = require('express-async-handler');
const { check, validationResult } = require('express-validator');

const UserRepository = require('../../db/user-repository');
const { authenticated, generateToken } = require('./security-utils');

const router = express.Router();

const email =
  check('email')
    .isEmail()
    .withMessage('Please provide a valid email address')
    .normalizeEmail();

const name =
  check('name')
    .not().isEmpty()
    .withMessage('Please provide a name for the user');

const password =
  check('password')
    .not().isEmpty()
    .withMessage('Please provide a password');

router.post('/', email, password, name, asyncHandler(async function (req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
    return next({ status: 422, errors: errors.array() });
    }

    const user = await UserRepository.create(req.body);

    const { jti, token } = generateToken(user);
    user.tokenId = jti;
    await user.save();
    res.cookie("token", token);
    res.json({ token, user: user.toSafeObject() });
}));

router.get('/:id/bookshelves', asyncHandler(async function (req, res, next) {
  const user = await UserRepository.findBookshelves(req.params.id);
  res.json(user);
}));

module.exports = router;
