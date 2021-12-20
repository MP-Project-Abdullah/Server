const express = require("express");
const storyRouter = express.Router();

const { newStory, getStorys, getStory } = require("../controller/story");

// Create new story
storyRouter.post("/newStory/:_id", newStory);

// Get all storys
storyRouter.get("/storys", getStorys);
storyRouter.get("/story/:_id", getStory);

module.exports = storyRouter;
