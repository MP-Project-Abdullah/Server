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
  updatePledged,
  getUserProject,
  getProjectNotApproved,
} = require("../controller/project");

// Create new project
projectRouter.post("/newProject/:_id", authentication, newProject);

// Get all projects
projectRouter.get("/projects", getProjects);

// Get all user projects
projectRouter.get("/userProjects/:userId", getUserProject);

// Get project by kind
projectRouter.get("/projectsKind/:kind", getProjectsByKind);

// Get one project by id
projectRouter.get("/project/:id", getProject);

// Delete project ( Soft )
projectRouter.put("/deleteProject/:_id", authentication, softDel);

// update info project
projectRouter.put("/updateProject/:_id", authentication, updateProject);

// Update pledged project
projectRouter.put(
  "/updateProject/:projectId/:donate",
  authentication,
  updatePledged
);

// Approved project
projectRouter.put("/aprooved/:_id", approvedProject);

// Reject project
projectRouter.put("/reject/:_id", rejectProject);

// Get all projects not approved
projectRouter.get("/projectsNotApproved", getProjectNotApproved);

module.exports = projectRouter;
