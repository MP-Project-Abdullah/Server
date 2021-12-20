const express = require("express");
const projectRouter = express.Router();

const {
  newProject,
  getProjects,
  softDel,
  getProject,
} = require("../controller/project");

// Create new project
projectRouter.post("/newProject/:_id", newProject);

// Get all projects
projectRouter.get("/projects", getProjects);

// Get one project by id
projectRouter.get("/project/:id", getProject);

// Delete project ( Soft )
projectRouter.put("/deleteProject/:_id", softDel);

module.exports = projectRouter;
