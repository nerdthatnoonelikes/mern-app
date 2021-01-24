const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

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
  if (req.body.body.message.trim() === "") {
    return res.json({
      status: 400,
      message: "Bad Request",
    });
  }

  if (req.body.body.username.trim() === "") {
    return res.json({
      status: 400,
      message: "Bad Request",
    });
  }

  Post.create({
    message: req.body.body.message.trim(),
    username: req.body.body.username.trim(),
  }).then(() => res.send("Saved post to database"));
});
