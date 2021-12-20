const projectModel = require("../../db/model/project");

// Create new project
const newProject = (req, res) => {
  const {
    describe,
    title,
    kind,
    deadline,
    goal,
    img,
    desc,
    location,
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    desc1,
    desc2,
    desc3,
    desc4,
    desc5,
    desc6,
  } = req.body;
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
      location,
      img1,
      img2,
      img3,
      img4,
      img5,
      img6,
      desc1,
      desc2,
      desc3,
      desc4,
      desc5,
      desc6,
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

// Toggle delete project ( soft )
const softDel = (req, res) => {
  const { _id } = req.params;
  try {
    projectModel.findById({ _id: _id }).then((item) => {
      if (item) {
        if (item.isDel == false) {
          projectModel
            .findByIdAndUpdate(
              { _id: _id },
              { $set: { isDel: true } },
              { new: true }
            )
            .then((result) => {
              res.status(200).json(result);
            })
            .catch((err) => {
              res.status(400).json(err);
            });
        } else {
          projectModel
            .findByIdAndUpdate(
              { _id: _id },
              { $set: { isDel: false } },
              { new: true }
            )
            .then((result) => {
              res.status(200).json(result);
            })
            .catch((err) => {
              res.status(400).json(err);
            });
        }
      } else {
        res.status(400).send("User not found");
      }
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

const getProject = (req, res) => {
  const { id } = req.params;
  projectModel
    .find({ _id: id })
    .then((result) => {
      if (result) {
        res.send(result);
      } else {
        res.status(400).send("Users not found");
      }
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

// Update info project
const updateProject = (req, res) => {
  const { _id } = req.params;
  const {
    name,
    avatar,
    describe,
    title,
    kind,
    deadline,
    goal,
    img,
    desc,
    location,
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    desc1,
    desc2,
    desc3,
    desc4,
    desc5,
    desc6,
  } = req.body;
  projectModel
    .findOneAndUpdate(
      { _id: _id },
      {
        $set: {
          name,
          avatar,
          describe,
          title,
          kind,
          deadline,
          goal,
          img,
          desc,
          location,
          img1,
          img2,
          img3,
          img4,
          img5,
          img6,
          desc1,
          desc2,
          desc3,
          desc4,
          desc5,
          desc6,
        },
      },
      { new: true }
    )
    .then((result) => {
      if (result) {
        res.send(result);
      } else {
        res.status(404).send("project not found");
      }
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

// Approved project
const approvedProject = (req, res) => {
  const { _id } = req.params;
  projectModel
    .findOneAndUpdate(
      { _id: _id },
      { $set: { approved: true } },
      { new: true }
    )
    .then((result) => {
      if (result) {
        res.send(result);
      } else {
        res.status(404).send("project not found");
      }
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports = {
  newProject,
  getProjects,
  softDel,
  getProject,
  updateProject,
  approvedProject,
};
