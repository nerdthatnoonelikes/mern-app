const express = require("express");
const mongoose = require("mongoose");

const app = express();

const Post = require("../models/Post");

app.listen("5000", () => {
  console.log("API ready");
});

mongoose.connect("mongodb://10.0.0.145:27017/mern", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => console.log("connected to db"));

app.get("/", (req, res) => {
  res.json({
    message: "MERN app :O",
  });
});

app.get("/posts", async (req, res) => {
  const result = await Post.find({});
  res.send(result);
});

app.post("/api/newpost", (req, res) => {
  Post.create({
    message: req.body.message.toString().trim(),
    username: req.body.username.toString().trim(),
  }).then(() => res.send("Saved post to database"));
});
