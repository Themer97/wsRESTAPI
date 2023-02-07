const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect("mongodb://127.0.0.1:27017/blog");

    console.log("DB is connected");
  } catch (error) {
    console.log("DB is not connected");
  }
};
module.exports = connectDB;