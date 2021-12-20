const express = require("express");
const storyRouter = express.Router();
const authentication = require("../middlewear/authentication");

const { newStory, getStorys, getStory } = require("../controller/story");

// Create new story
storyRouter.post("/newStory/:_id", authentication, newStory);

// Get all storys
storyRouter.get("/storys", getStorys);

// Get one story
storyRouter.get("/story/:_id", getStory);

module.exports = storyRouter;
