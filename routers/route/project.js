const express = require("express");
const projectRouter = express.Router();
const authentication = require("../middlewear/authentication");
const authorization = require("../middlewear/authorization");

const {
  newProject,
  getProjects,
  softDel,
  getProject,
  updateProject,
  approvedProject,
} = require("../controller/project");

// Create new project
projectRouter.post("/newProject/:_id", authentication, newProject);

// Get all projects
projectRouter.get("/projects", getProjects);

// Get one project by id
projectRouter.get("/project/:id", getProject);

// Delete project ( Soft )
projectRouter.put("/deleteProject/:_id", softDel);

// update info project
projectRouter.put("/updateProject/:_id", updateProject);

// Approved project
projectRouter.put("/aprooved/:_id", approvedProject);

module.exports = projectRouter;
