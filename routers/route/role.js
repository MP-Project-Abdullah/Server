const express = require("express");
const roleRouter = express.Router();

const { newRole, getRoles } = require("../controller/role");

// Create new role
roleRouter.post("/newRole", newRole);

// Get all roles
roleRouter.get("/roles", getRoles);

module.exports = roleRouter;
