const mongoose = require("mongoose");
const connectdb = async () => {
  try {
    const db = await mongoose.connect("mongodb://127.0.0.1:27017/test");
    console.log(`db connected successfull `);
  } catch (error) {
    console.log("db not connected");
  }
};

module.exports = { connectdb };
