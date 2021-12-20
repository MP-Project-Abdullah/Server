const express = require("express");
const storyRouter = express.Router();

const { newStory } = require("../controller/story");

storyRouter.post("/newStory/:_id", newStory);

module.exports = storyRouter;
