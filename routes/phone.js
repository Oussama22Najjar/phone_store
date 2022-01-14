const express = require("express");
const {
  addPhone,
  getAllPhones,
  getPhoneById,
  deletePhone,
  updatePhone,
} = require("../controllers/phone.controller");
const isAuth = require("../middlewares/passport-setup");
const { addPhoneRules, validator } = require("../middlewares/validator");

const Router = express.Router();

// http://localhost:6000/phone/add-phone
// Add new Phone

Router.post("/add-phone", addPhoneRules(), validator, addPhone);

// http://localhost:6000/phone/get-phones
//get all phones

Router.get("/get-phones", getAllPhones);

// http://localhost:6000/phone/get-phone/:_id
//get phone by id

Router.get("/get-phone/:_id", getPhoneById);

// http://localhost:6000/phone/delete-phone/:_id
//Delete phone

Router.delete("/delete-phone/:_id", deletePhone);

// http://localhost:6000/phone/update-phone/:_id
//Update phone

Router.put("/update-phone/:_id", updatePhone);

module.exports = Router;
