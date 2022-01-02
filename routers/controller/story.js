const storyModel = require("../../db/model/successStory");

// Create new project
const newStory = (req, res) => {
  const { desc, describe, title, desc1, desc2, desc3, url } = req.body;
  const { _id } = req.params;
  try {
    const newStory = new storyModel({
      desc,
      title,
      describe,
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
        console.log(err);
        res.json(err);
      });
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
};

// Get all storys
const getStories = (req, res) => {
  storyModel
    .find({ approve: true })
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

// Get all stories not approved
const getStoriesNotApproved = (req, res) => {
  storyModel
    .find({ $and: [{ approve: false }, { reject: false }] })
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

const approvedStory = (req, res) => {
  const { _id } = req.params;
  storyModel
    .findOneAndUpdate({ _id: _id }, { $set: { approve: true } }, { new: true })
    .then((result) => {
      if (result) {
        res.status(200).json(result);
      } else {
        res.status(404).send("story not found");
      }
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

// Reject project
const rejectStory = (req, res) => {
  const { _id } = req.params;
  storyModel
    .findOneAndUpdate({ _id: _id }, { $set: { reject: true } }, { new: true })
    .then((result) => {
      if (result) {
        res.send(result);
      } else {
        res.status(404).send("story not found");
      }
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports = {
  newStory,
  getStories,
  getStory,
  getStoriesNotApproved,
  approvedStory,
  rejectStory,
};
