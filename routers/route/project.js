const express = require("express");
const projectRouter = express.Router();

const { newProject, getProjects, softDel } = require("../controller/project");

// Create new project
projectRouter.post("/newProject/:_id", newProject);

// Get all projects
projectRouter.get("/projects", getProjects);

// Delete project ( Soft )
projectRouter.put("/deleteProject/:_id", softDel);

module.exports = projectRouter;
