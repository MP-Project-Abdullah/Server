const express = require("express");
const projectRouter = express.Router();

const { newProject, getProjects } = require("../controller/project");

// Create new project
projectRouter.post("/newProject/:_id", newProject);

// Get all projects
projectRouter.get("/projects", getProjects);

module.exports = projectRouter;
