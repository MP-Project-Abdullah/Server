const express = require("express");
const userRouter = express.Router();

const {
  register,
  login,
  softDel,
  getUsers,
  getUser,
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
userRouter.put("/deleteUser/:_id", softDel);

module.exports = userRouter;
