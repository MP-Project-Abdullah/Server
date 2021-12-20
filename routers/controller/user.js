const userModel = require("../../db/model/user");

const bcrypt = require("bcrypt");

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

module.exports = { register };
