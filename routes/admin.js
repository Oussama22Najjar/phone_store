const express = require("express");
const Router = express.Router();

Router.post("/admin", (req, res) => {
  const { pseudo, password } = req.body;

  try {
    if (pseudo !== process.env.admin)
      return res.status(400).json({ msg: "invalid cred" });

    if (password !== process.env.admin)
      return res.status(400).json({ msg: "invalid cred" });

    res.status(200).json({ msg: "Admin connected" });
  } catch (error) {
    res.status(400).json({ msg: "Admin connection failed" });
  }
});

module.exports = Router;
