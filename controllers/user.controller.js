const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

/***************************** User register ******************************** */

exports.userRegiter = async (req, res) => {
  let newUser = new User({ ...req.body });
  try {
    const user = await User.findOne({ email: newUser.email });

    if (user) return res.status(404).json({ msg: "User already exist" });

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(newUser.password, salt);

    newUser.password = hash;

    await newUser.save();

    res.status(201).json({ msg: "User register success" });
  } catch (error) {
    console.log("Register error", error);

    res.status(401).json({ msg: "User register failed" });
  }
};

/******************************* User login *********************************** */

exports.userLogin = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user)
      return res.status(404).json({ errors: [{ msg: "Bad credentiels" }] });

    const isMatch = await bcrypt.compare(req.body.password, user.password);

    if (!isMatch)
      return res.status(404).json({ errors: [{ msg: "Bad credentiels" }] });

    const payload = {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      adress: user.adress,
      phoneNumber: user.phoneNumber,
      email: user.email,
    };

    const token = await jwt.sign(payload, process.env.secretOrKey);

    res.status(200).json({ token: `Bearer ${token}` });
  } catch (error) {
    console.log("Login failed", error);

    res.status(405).json({ errors: [{ msg: "Login failed" }] });
  }
};
