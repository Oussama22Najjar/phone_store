const mongoose = require("mongoose");

const phoneSchema = new mongoose.Schema({
  model: String,
  camera: String,
  ram: String,
  rom: String,
  resolution: String,
  category: {
    type: String,
    enum: ["new", "reconditioned"],
    default: "new",
  },

  image: String,
  price: String,
});

module.exports = mongoose.model("Phone", phoneSchema);
