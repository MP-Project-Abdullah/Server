const projectModel = require("../../db/model/project");

// Create new project
const newProject = (req, res) => {
  const { describe, title, kind, deadline, goal, img, desc, time } = req.body;
  const { _id } = req.params;
  try {
    const newProject = new projectModel({
      describe,
      title,
      kind,
      deadline,
      goal,
      img,
      desc,
      time: Date(),
      user: _id,
    });
    newProject
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

// Get projects
const getProjects = (req, res) => {
  projectModel
    .find({})
    .then((result) => {
      if (result) {
        res.send(result);
      } else {
        res.status(400).send("projects not found");
      }
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports = { newProject,getProjects };
