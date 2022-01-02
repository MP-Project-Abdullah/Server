const express = require("express");
const packagesUserRouter = express.Router();
const authentication = require("../middlewear/authentication");
const authorization = require("../middlewear/authorization");

const {
  createUserPackages,
  createUserDonate,
  getUserPackage,
  getUserDonations,
  getBackers,
} = require("../controller/userPackages");

// Create packages for the user after he buy the package
packagesUserRouter.post(
  "/newUserPackages/:packageId/:userId/:donate/:projectId",
  createUserPackages
);

// Create packages for the user after he buy the package
packagesUserRouter.post(
  "/newUserPackage/:userId/:donate/:projectId",
  createUserDonate
);

// Git user packages
packagesUserRouter.get("/getUserPackage/:packageId/:userId", getUserPackage);

//
packagesUserRouter.get("/backersPackage/:id", getBackers);

// Get user donations
packagesUserRouter.get("/getUserPackages/:userId", getUserDonations);

module.exports = packagesUserRouter;
