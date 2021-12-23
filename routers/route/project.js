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
  rejectProject,
  getProjectsByKind,
} = require("../controller/project");

// Create new project
projectRouter.post("/newProject/:_id", newProject);

// Get all projects
projectRouter.get("/projects", getProjects);
projectRouter.get("/projectsKind/:kind", getProjectsByKind);

// Get one project by id
projectRouter.get("/project/:id", getProject);

// Delete project ( Soft )
projectRouter.put(
  "/deleteProject/:_id",
  authentication,
  authorization,
  softDel
);

// update info project
projectRouter.put("/updateProject/:_id", authentication, updateProject);

// Approved project
projectRouter.put(
  "/aprooved/:_id",
  authentication,
  authorization,
  approvedProject
);

// Reject project
projectRouter.put("/reject/:_id", authentication, authorization, rejectProject);

module.exports = projectRouter;
