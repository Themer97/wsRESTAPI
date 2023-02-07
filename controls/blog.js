const blog = require("../modal/newUser");
exports.Addblog = async (req, res) => {

  try {
    const newuser = new blog(req.body);
    await newuser.save();
    res.status(200).send({ msg: "blog added", newuser });
  } catch (error) {
    res.status(500).send("couldn't add blog");
  }
};
exports.Getblogs = async (req, res) => {
  try {
    const blogs = await blog.find();
    res.status(200).send({ msg: "list of blogs", blogs });
  } catch (error) {
    res.status(500).send("couldn't get blogs");
  }
};
exports.Deleteblog = async (req, res) => {
  try {
    await blog.findByIdAndDelete(req.params.id);
    res.status(200).send("blog deleted");
  } catch (error) {
    res.status(500).send("blog was not deleted");
  }
};
exports.Editblog = async (req, res) => {
  try {
    const editblog = await blog.findByIdAndUpdate(
      req.params.id,
      {
        $set: { ...req.body },
      },
      { new: true }
    );
    res.status(200).send({ msg: "blog updated", editblog });
  } catch (error) {
    res.status(500).send("couldn't update blog");
  }
};