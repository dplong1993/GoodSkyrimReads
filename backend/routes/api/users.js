const express = require("express");
const asyncHandler = require("express-async-handler");

const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { User, Book } = require("../../db/models");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

const router = express.Router();

const validateSignup = [
  check("email")
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage("Please provide a valid email."),
  check("email")
    .isLength({ min: 3, max: 256 })
    .withMessage(
      "Please provide an email with at least 3 characters and no more than 256 characters."
    ),
  check("username")
    .exists({ checkFalsy: true })
    .isLength({ min: 3, max: 30 })
    .withMessage(
      "Please provide a username with at least 3 characters and no more than 30 characters."
    ),
  check("username").not().isEmail().withMessage("Username cannot be an email."),
  check("lastName")
    .exists({ checkFalsy: true })
    .isLength({ min: 2, max: 30 })
    .withMessage(
      "Please provide a Last Name with at least 2 characters and no more than 30 characters."
    ),
  check("firstName")
    .exists({ checkFalsy: true })
    .isLength({ min: 2, max: 30 })
    .withMessage(
      "Please provide a First Name with at least 2 characters and no more than 30 characters."
    ),
  check("password")
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage("Password must be 6 characters or more."),
  handleValidationErrors,
];

// Sign up
router.post(
  "",
  validateSignup,
  asyncHandler(async (req, res) => {
    const { email, password, username, lastName, firstName } = req.body;
    const user = await User.signup({
      email,
      username,
      password,
      lastName,
      firstName,
    });

    await setTokenCookie(res, user);

    return res.json({
      user,
    });
  })
);

router.get(
  "/:id/bookshelves",
  asyncHandler(async function (req, res, next) {
    const user = await User.findByPk(req.params.id, {
      include: [
        { model: Book, as: "ReadBooks" },
        { model: Book, as: "CurrReadBooks" },
        { model: Book, as: "ToReadBooks" },
      ],
    });
    res.json(user || {});
  })
);

module.exports = router;
