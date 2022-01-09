const express = require("express");
const userRouter = express.Router();
const authentication = require("../middlewear/authentication");
const authorization = require("../middlewear/authorization");
const popuptools = require("popup-tools");
require("../middlewear/passport");
const passport = require("passport");

const {
  register,
  login,
  softDel,
  getUsers,
  getUser,
  updateUser,
  activatetUser,
  resetPass,
  sendCodeResetPass,
  getUserByEmail,
  contactUs,
} = require("../controller/user");

// Create new user
userRouter.post("/register", register);

// Login user
userRouter.post("/login", login);

// Get all users
userRouter.get("/users", getUsers);

// Get one user by id
userRouter.get("/user/:id", getUser);

// Contact us
userRouter.post("/sendQuestion", contactUs);

// Soft delete user
userRouter.put("/deleteUser/:_id",authentication,authorization, softDel);

// Update name and avatar user
userRouter.put("/updateUser/:_id", authentication, updateUser);

// Activate user
userRouter.put("/activate/:_id", activatetUser);

// Reset password
userRouter.get("/userEmail/:email", getUserByEmail);

// Send code to the email
userRouter.post("/resetEmailCode/:email", sendCodeResetPass);

// Reset password
userRouter.put("/reset/:email", resetPass);

// Google auth
userRouter.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

// Google auth
userRouter.get(
  "/auth/google/callback",
  passport.authenticate("google"),
  (req, res) => {
    res.end(popuptools.popupResponse(req.user));
  }
);

module.exports = userRouter;
