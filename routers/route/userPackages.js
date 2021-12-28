const express = require("express");
const packagesUserRouter = express.Router();
const authentication = require("../middlewear/authentication");
const authorization = require("../middlewear/authorization");

const {
  createUserPackages,
  createUserDonate,
  getUserPackage,
  getUserDonations,
} = require("../controller/userPackages");

// Create packages for the user after he buy the package
packagesUserRouter.post(
  "/newUserPackages/:packageId/:userId/:donate",
  createUserPackages
);

// Create packages for the user after he buy the package
packagesUserRouter.post("/newUserPackage/:userId/:donate", createUserDonate);

// Git user packages
packagesUserRouter.get("/getUserPackage/:packageId/:userId", getUserPackage);

// Get user donations
packagesUserRouter.get("/getUserPackages/:userId", getUserDonations);

module.exports = packagesUserRouter;
