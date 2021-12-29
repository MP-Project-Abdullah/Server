const storyModel = require("../../db/model/successStory");

// Create new project
const newStory = (req, res) => {
  const { desc, img, describe, title, desc1, desc2, desc3, url } = req.body;
  const { _id } = req.params;
  try {
    const newStory = new storyModel({
      desc,
      title,
      describe,
      img,
      desc1,
      desc2,
      desc3,
      time: Date(),
      user: _id,
      url,
    });
    newStory
      .save()
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res.json(err);
      });
  } catch (error) {
    res.send(error.message);
  }
};

// Get all storys
const getStories = (req, res) => {
  storyModel
    .find({})
    .then((result) => {
      if (result) {
        res.send(result);
      } else {
        res.status(404).json({ message: "Not found" });
      }
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

// Get on story
const getStory = (req, res) => {
  const { _id } = req.params;
  storyModel
    .find({ _id: _id })
    .then((result) => {
      if (result) {
        res.send(result);
      } else {
        res.status(404).json({ message: "Not found" });
      }
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports = { newStory, getStories, getStory };
