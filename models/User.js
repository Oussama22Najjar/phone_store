const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  adress: String,
  phoneNumber: String,
  email: {
    type: String,
  },
  role : {
    type : String,
    enum : ["user" , "admin"],
    default : "user"

  },
  password: String,
});

module.exports = User = mongoose.model("user", userSchema);
