const userModel = require("../../db/model/user");

const bcrypt = require("bcrypt");

// Create new user
const register = (req, res) => {
  const { email, name, username, password } = req.body;

  try {
    const newUser = userModel({
      email,
      name,
      username,
      password,
    });
    newUser
      .save()
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  } catch (error) {
    console.log(error);
  }
};

// Login user
const login = (req, res) => {
  const { data, password } = req.body;

  userModel
    .findOne({ $or: [{ email: data }, { username: data }] })
    .then((result) => {
      if (result) {
        if (password === result.password) {
          res.status(200).json({ message: "Login successfully" });
        } else {
          res.status(400).json({ message: "Wrong email or password" });
        }
      } else {
        res.status(404).json({ message: "Not found" });
      }
    });
};

module.exports = { register, login };
