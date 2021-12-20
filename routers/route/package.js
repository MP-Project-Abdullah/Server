const express = require("express");
const packagetRouter = express.Router();
const authentication = require("../middlewear/authentication");
const authorization = require("../middlewear/authorization");

const { newPackage } = require("../controller/package");

packagetRouter.post("/newPackage/:userId/:projectId", newPackage);

module.exports = packagetRouter;
