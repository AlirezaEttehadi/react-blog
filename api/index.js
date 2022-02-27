const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("connected to mongoDB"))
  .catch((err) => console.log(err));

app.use("/", (req, res) => {
  console.log("hello");
});

app.listen("4000", () => {
  console.log("backend is running...");
});
