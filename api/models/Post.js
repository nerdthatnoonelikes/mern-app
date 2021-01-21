const { Schema, model } = require("mongoose");

const PostSchema = Schema({
  message: String,
  username: String,
});

const Post = model("Post", PostSchema);

module.exports = Post;
