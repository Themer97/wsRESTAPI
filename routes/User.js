const express = require("express");
const User = require("../models/User");
const router = express.Router();


router.get("/", async (req, res) => {
  try {
    const allUsers = await User.find({});
    res.send(allUsers);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
});


router.post("/", async (req, res) => {
  try {
    const findUser = await User.findOne({ name: req.body.name });
    if (findUser) {
      return res.status(400).send({ msg: "User already exists" });
    }
    const newUser = new User({ ...req.body });
    await newUser.save();
    res.send({ newUser, msg: "user added with succes" });
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const UserEdited = await User.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    const newUser = await User.find({ _id: req.params.id });
    if (UserEdited.modifiedCount) {
      return res.send({ msg: "user updated", newUser });
    }
    res.status(400).send("user already edited");
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const UserRemoved = await User.deleteOne({ _id: req.params.id });
    if (UserRemoved.deletedCount) {
      return res.send({ msg: "User deleted" });
    }
    res.status(400).send({ msg: " User is already deleted" });
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
});

module.exports = router;
