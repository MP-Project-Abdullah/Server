const projectModel = require("../../db/model/project");

// Create new project
const newProject = (req, res) => {
  const {
    describe,
    title,
    kind,
    deadline,
    goal,
    desc,
    location,
    desc1,
    desc2,
    desc3,
    desc4,
    desc5,
    desc6,
    url,
  } = req.body;
  const { _id } = req.params;
  try {
    const newProject = new projectModel({
      describe,
      title,
      kind,
      deadline,
      goal,
      desc,
      time: Date(),
      user: _id,
      location,
      url,
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
    .find({ $and: [{ approved: true }, { isDel: false }, { reject: false }] })
    .then((result) => {
      if (result) {
        res.status(200).json(result);
      } else {
        res.status(400).send("projects not found");
      }
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

// Get user projects
const getUserProject = (req, res) => {
  const { userId } = req.params;
  projectModel
    .find({ user: userId })
    .then((result) => {
      if (result) {
        res.status(200).json(result);
      } else {
        res.status(400).send("Bad request");
      }
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

// Get projects by kind
const getProjectsByKind = (req, res) => {
  const { kind } = req.params;
  projectModel
    .find({
      $and: [
        { kind: kind },
        { approved: true },
        { isDel: false },
        { reject: false },
      ],
    })
    .then((result) => {
      if (result) {
        res.status(200).json(result);
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

// Get one project
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

// Get all projects not approved
const getProjectNotApproved = (req, res) => {
  projectModel
    .find({ $and: [{ approved: false }, { reject: false }] })
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
    kind,
    title,
    desc,
    describe,
    goal,
    deadline,
    location,
    desc1,
    desc2,
    desc3,
    desc4,
    desc5,
    desc6,
    url,
  } = req.body;
  console.log("URL", url);
  projectModel
    .findOneAndUpdate(
      { _id: _id },
      {
        $set: {
          describe,
          title,
          kind,
          deadline,
          goal,
          desc,
          location,
          desc1,
          desc2,
          desc3,
          desc4,
          desc5,
          desc6,
          url,
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
    .findOneAndUpdate({ _id: _id }, { $set: { approved: true } }, { new: true })
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

// Reject project
const rejectProject = (req, res) => {
  const { _id } = req.params;
  projectModel
    .findOneAndUpdate({ _id: _id }, { $set: { reject: true } }, { new: true })
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

// Update pledged project
const updatePledged = (req, res) => {
  const { projectId, donate } = req.params;
  projectModel
    .findOneAndUpdate(
      { _id: projectId },
      { $inc: { pledged: donate } },
      { new: true }
    )
    .then((result) => {
      if (result) {
        res.status(200).json(result);
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
  rejectProject,
  getProjectsByKind,
  updatePledged,
  getUserProject,
  getProjectNotApproved,
};
