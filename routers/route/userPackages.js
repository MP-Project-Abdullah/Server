const express = require("express");
const packagesUserRouter = express.Router();
const authentication = require("../middlewear/authentication");
const authorization = require("../middlewear/authorization");

const {
  createUserPackages,
  getUserPackage,
  getUserPackages,

} = require("../controller/userPackages");

packagesUserRouter.post(
  "/newUserPackages/:packageId/:userId",
  createUserPackages
);

packagesUserRouter.get("/getUserPackage/:packageId/:userId", getUserPackage);

packagesUserRouter.get("/getUserPackages/:userId", getUserPackages);

module.exports = packagesUserRouter;
