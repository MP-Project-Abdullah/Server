const express = require("express");
const storyRouter = express.Router();
const authentication = require("../middlewear/authentication");

const {
  newStory,
  getStories,
  getStory,
  getStoriesNotApproved,
  approvedStory,
  rejectStory,
} = require("../controller/story");

// Create new story
storyRouter.post("/newStory/:_id", newStory);

storyRouter.put("/aproovedStory/:_id", approvedStory);

// Get all stories
storyRouter.get("/stories", getStories);

// Approved story
storyRouter.get("/storiesNotApproved", getStoriesNotApproved);

// Reject story
storyRouter.put("/rejectStory/:_id", rejectStory);

// Get one story
storyRouter.get("/story/:_id", getStory);

module.exports = storyRouter;
