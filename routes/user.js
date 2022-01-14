const express = require("express");
const { userRegiter, userLogin } = require("../controllers/user.controller");
const isAuth = require("../middlewares/passport-setup");
const { registerRules, validator } = require("../middlewares/validator");

const Router = express.Router();

// http://localhost:5000/user/register-user
// Register user

Router.post("/register-user", registerRules(), validator, userRegiter);

// http://localhost:5000/user/login-user
// Register user

Router.post("/login-user", userLogin);

// http://localhost:5000/user/current-user
// Register user

Router.get("/current-user", isAuth(), (req, res) => {
  res.json(req.user);
});

module.exports = Router;
