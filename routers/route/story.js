const express = require("express");
const storyRouter = express.Router();

const { newStory, getStory } = require("../controller/story");

// Create new story
storyRouter.post("/newStory/:_id", newStory);

// Get all storys
storyRouter.get("/storys", getStory);

module.exports = storyRouter;
