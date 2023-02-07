const mongoose = require("mongoose");


const blogSchema = new mongoose.Schema({

  name: String,
  image: String,
  About: String,
  title: String,
  blog: String,
});
module.exports = mongoose.model("blog", blogSchema);