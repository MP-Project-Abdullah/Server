const express = require("express");
const storyRouter = express.Router();
const authentication = require("../middlewear/authentication");

const { newStory, getStories, getStory } = require("../controller/story");

// Create new story
storyRouter.post("/newStory/:_id", newStory);

// Get all stories
storyRouter.get("/stories", getStories);

// Get one story
storyRouter.get("/story/:_id", getStory);

module.exports = storyRouter;
