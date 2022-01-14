const { check, validationResult } = require("express-validator");

exports.registerRules = () => [
  check("email", "Invalid email").isEmail(),

  check("password", "At least you need eight caracters").isLength({ min: 8 }),
];

exports.addPhoneRules = () => [check("model", "Field is required").notEmpty()];

exports.validator = (req, res, next) => {
  const errors = validationResult(req);

  console.log(errors);

  errors.isEmpty() ? next() : res.status(400).json({ errors: errors });
};
