const express = require("express");
const packagetRouter = express.Router();
const authentication = require("../middlewear/authentication");
const authorization = require("../middlewear/authorization");

const { newPackage, getPackages } = require("../controller/package");

packagetRouter.post("/newPackage/:userId/:projectId", newPackage);
packagetRouter.get("/projects/:projectId", getPackages);

module.exports = packagetRouter;
