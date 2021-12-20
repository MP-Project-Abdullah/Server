const express = require("express");
const userRouter = express.Router();

const { register, login } = require("../controller/user");

// Create new user
userRouter.post("/register", register);

// Login user
userRouter.post("/login", login);

module.exports = userRouter;
