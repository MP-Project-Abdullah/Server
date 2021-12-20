const storyModel = require("../../db/model/successStory");

// Create new project
const newStory = (req, res) => {
  const { desc, title, img, img1, img2, img3, desc1, desc2, desc3 } = req.body;
  const { _id } = req.params;
  try {
    const newStory = new storyModel({
      desc,
      title,
      img,
      img1,
      img2,
      img3,
      desc1,
      desc2,
      desc3,
      time: Date(),
      user: _id,
    });
    newStory
      .save()
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  } catch (error) {
    res.status(400).send(error);
  }
};

// Get all storys
const getStorys = (req, res) => {
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
    .findOne({ _id: _id })
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

module.exports = { newStory, getStorys ,getStory};
