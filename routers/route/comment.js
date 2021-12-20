const express = require("express");
const commentRouter = express.Router();
const authentication = require("../middlewear/authentication");
const authorization = require("../middlewear/authorization");

const {
  newComment,
  deleteCommet,
  getComment,
} = require("../controller/comment");

commentRouter.post("/newComment/:userId/:projectId", newComment);
commentRouter.delete("/deleteComment/:_id", deleteCommet);
commentRouter.get("/comment/:_id", getComment);

module.exports = commentRouter;
