const express = require("express");
const userRouter = express.Router();

const { register, login, softDel } = require("../controller/user");

// Create new user
userRouter.post("/register", register);

// Login user
userRouter.post("/login", login);

// Soft delete user
userRouter.put("/deleteUser/:_id", softDel);

module.exports = userRouter;
