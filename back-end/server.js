const express = require("express");
const User = require("./Schema/register");
const cors = require("cors");
const { connectdb } = require("./db");
require("dotenv").config();
connectdb();
const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 4000;
app.post("/register", async (req, res) => {
  const { email, password, username } = req.body;
  try {
    let exitsUser = await User.findOne({ email });
    if (exitsUser) {
      console.log("user is all ready exits");
      return res.status(504).send("user is all ready exits");
    }

    await User.create({
      email: email,
      password: password,
      username: username,
    });
    res.status(201).send("register is successfully");
  } catch (error) {
    console.log(`something went wrong !! ${error}`);
    res.status(404).send(`something went wrong !! ${error}`);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
