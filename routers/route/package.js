const express = require("express");
const packagetRouter = express.Router();
const authentication = require("../middlewear/authentication");
const authorization = require("../middlewear/authorization");

const { newPackage, getPackages } = require("../controller/package");

// Create new package
packagetRouter.post(
  "/newPackage/:userId/:projectId",
  authentication,
  newPackage
);

// Get packages by project id
packagetRouter.get("/projects/:projectId", getPackages);

module.exports = packagetRouter;
