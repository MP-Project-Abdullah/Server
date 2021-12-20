const packagetModel = require("../../db/model/package");

// Create new project
const newPackage = (req, res) => {
  const { title, amount, describe, arrive } = req.body;
  const { userId, projectId } = req.params;
  try {
    const newPackage = new packagetModel({
      project: projectId,
      user: userId,
      title,
      describe,
      arrive,
      amount,
      time: Date(),
    });
    newPackage
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

const getPackages = (req, res) => {
  const { projectId } = req.params;
  try {
    packagetModel.find({ project: projectId }).then((result) => {
      if (result) {
        res.status(200).json(result);
      } else {
        res.status(404).json({ message: "Not found" });
      }
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = {
  newPackage,
};
