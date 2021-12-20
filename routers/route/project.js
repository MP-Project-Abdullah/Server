const express = require("express");
const projectRouter = express.Router();

const { newProject } = require("../controller/project");

projectRouter.post("/newProject/:_id", newProject);

module.exports = projectRouter;
