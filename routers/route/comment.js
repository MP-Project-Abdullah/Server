const express = require("express");
const commentRouter = express.Router();
const authentication = require("../middlewear/authentication");
const authorization = require("../middlewear/authorization");

const { newComment } = require("../controller/comment");

commentRouter.post("/newComment/:userId/:projectId", newComment);

module.exports = commentRouter;
