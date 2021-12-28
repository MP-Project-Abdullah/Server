const express = require("express");
const packagesUserRouter = express.Router();
const authentication = require("../middlewear/authentication");
const authorization = require("../middlewear/authorization");

const {
  createUserPackages,
  createUserPackage,
  getUserPackage,
  getUserPackages,

} = require("../controller/userPackages");

packagesUserRouter.post(
  "/newUserPackages/:packageId/:userId/:donate",
  createUserPackages
);

packagesUserRouter.post(
  "/newUserPackage/:userId/:donate",
  createUserPackage
);

packagesUserRouter.get("/getUserPackage/:packageId/:userId", getUserPackage);

packagesUserRouter.get("/getUserPackages/:userId", getUserPackages);

module.exports = packagesUserRouter;
