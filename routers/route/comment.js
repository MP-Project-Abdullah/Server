const express = require("express");
const commentRouter = express.Router();
const authentication = require("../middlewear/authentication");
const authorization = require("../middlewear/authorization");

const {
  newComment,
  deleteCommet,
  getComment,
  getAllComment,
} = require("../controller/comment");

// Create new comment
commentRouter.post(
  "/newComment/:userId/:projectId",
  // authentication,
  newComment
);

// Delete comment
commentRouter.delete("/deleteComment/:_id", authentication, deleteCommet);

// Get one comment
commentRouter.get("/comment/:_id", getComment);
commentRouter.get("/allComment/:idProject", getAllComment);

module.exports = commentRouter;
