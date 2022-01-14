require("dotenv").config({ path: "./config/.env" });

const express = require("express");
const connectDB = require("./config/connectDB");
const user = require("./routes/user");
const phone = require("./routes/phone");
const admin = require("./routes/admin");

//Initialize express
const app = express();

// Data base connection
connectDB();

app.use(express.json());

app.use("/user", user);
app.use("/phone", phone);
app.use("/", admin);

//Create PORT

// const PORT = process.env.port;

//Listen & Run  server
app.listen(6000, (err) => {
  err
    ? console.log("Server connection failed")
    : console.log(`Server connected successfully on port 5000 `);
});
