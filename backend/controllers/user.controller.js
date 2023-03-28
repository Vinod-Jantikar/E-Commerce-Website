const express = require("express");
const router = express.Router();
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const authentication = require("../middlewares/auth");

const newToken = (user) => {
  return jwt.sign({ user }, "jfjhsfuhefiucndkjsc");
};

router.post("/signup", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    console.log(user);
    console.log(req.body);
    if (user) {
      throw new Error("User already exists");
    }

    await User.create(req.body);

    res.status(200).send({ message: "User Successfully Signed up" });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.post("/signin", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      throw new Error("User not found");
    }

    const match = user.checkPassword(req.body.password);

    console.log(match);

    if (!match) {
      throw new Error("Either Email or password are incorrect");
    }

    const token = newToken(user);

    res.status(200).send({ user, token });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

module.exports = router;
