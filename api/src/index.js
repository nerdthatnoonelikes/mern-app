const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.listen("5000", () => {
  console.log("API ready");
});

mongoose.connect("mongodb://10.0.0.145:27017/mern", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => console.log("connected to db"));

app.get("/posts", (req, res) => {});
