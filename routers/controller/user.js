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

// Get all users
const getUsers = (req, res) => {
  userModel
    .find({})
    .then((result) => {
      if (result) {
        res.send(result);
      } else {
        res.status(404).json({ message: "Not found" });
      }
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

// Get user by id
const getUser = (req, res) => {
  const { id } = req.params;
  userModel
    .find({ _id: id })
    .then((result) => {
      if (result) {
        res.send(result);
      } else {
        res.status(400).send("Users not found");
      }
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

// Toggle delete user ( soft )
const softDel = (req, res) => {
  const { _id } = req.params;
  try {
    userModel.findById({ _id: _id }).then((item) => {
      if (item) {
        if (item.isDel == false) {
          userModel
            .findByIdAndUpdate(
              { _id: _id },
              { $set: { isDel: true } },
              { new: true }
            )
            .then((result) => {
              res.status(200).json(result);
            })
            .catch((err) => {
              res.status(400).json(err);
            });
        } else {
          userModel
            .findByIdAndUpdate(
              { _id: _id },
              { $set: { isDel: false } },
              { new: true }
            )
            .then((result) => {
              res.status(200).json(result);
            })
            .catch((err) => {
              res.status(400).json(err);
            });
        }
      } else {
        res.status(400).send("User not found");
      }
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

// Update info user
const updateUser = (req, res) => {
  const { _id } = req.params;
  const { name, avatar } = req.body;
  userModel
    .findOneAndUpdate(
      { _id: _id },
      { $set: { name: name, avatar: avatar } },
      { new: true }
    )
    .then((result) => {
      if (result) {
        res.send(result);
      } else {
        res.status(404).send("user not found");
      }
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports = { register, login, softDel, getUsers, getUser, updateUser };
