const express = require("express");
const {
  Addblog,
  Deleteblog,
  Editblog,
  Getblogs,
} = require("../controls/blog");
const blog = require("../modal/newUser");
const blogRoute = express.Router();

blogRoute.post("/add", Addblog);
blogRoute.get("/all", Getblogs);
blogRoute.delete("/delete/:id", Deleteblog);
blogRoute.put("/edit/:id", Editblog);
module.exports = blogRoute;