const express = require("express");
const roleRouter = express.Router();
const authentication = require("../middlewear/authentication");
const authorization = require("../middlewear/authorization");

const { newRole, getRoles } = require("../controller/role");

// Create new role
roleRouter.post("/newRole", authentication, authorization, newRole);

// Get all roles
roleRouter.get("/roles", authentication, authorization, getRoles);

module.exports = roleRouter;
