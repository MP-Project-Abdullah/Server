const express = require("express");
const userRouter = express.Router();
const authentication = require("../middlewear/authentication");
const authorization = require("../middlewear/authorization");

const {
  register,
  login,
  softDel,
  getUsers,
  getUser,
  updateUser,
  activatetUser,
} = require("../controller/user");

// Create new user
userRouter.post("/register", register);

// Login user
userRouter.post("/login", login);

// Get all users
userRouter.get("/users", getUsers);

// Get one user by id
userRouter.get("/user/:id", getUser);

// Soft delete user
userRouter.put("/deleteUser/:_id", authentication, authorization, softDel);

// Update name and avatar user
userRouter.put("/updateUser/:_id", authentication, updateUser);

// Activate user
userRouter.put("/activate/:_id", activatetUser);

module.exports = userRouter;
