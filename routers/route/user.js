const express = require("express");
const userRouter = express.Router();

const { register } = require("../controller/user");

userRouter.post("/register", register);

module.exports = userRouter;
