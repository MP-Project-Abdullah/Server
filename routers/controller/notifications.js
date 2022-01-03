const notificationsModel = require("../../db/model/Notifications");

// Create new notifications
const newNotifications = (req, res) => {
  const { title, message } = req.body;
  const { userId, projectId } = req.params;
  try {
    const newNotifications = new notificationsModel({
      title: title,
      message: message,
      user: userId,
      project: projectId,
    });
    newNotifications
      .save()
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  } catch (error) {
    res.status(400).json(error);
  }
};

// Delete notification
const deleteotification = (req, res) => {
  const { id } = req.params;

  notificationsModel
    .findByIdAndDelete({ _id: id })
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

// Get notifications
const getNotifications = (req, res) => {
  const { id } = req.params;

  try {
    notificationsModel
      .find({ user: id })
      .populate("project")
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  } catch (error) {
    res.status(400).json(error);
  }
};

// Update info user
const updateShow = (req, res) => {
  const { _id } = req.params;
  notificationsModel
    .findOne({ _id: _id })
    .then((element) => {
      if (element.showMessage == false) {
        notificationsModel
          .findOneAndUpdate(
            { _id: _id },
            { $set: { showMessage: true } },
            { new: true }
          )
          .then((result) => {
            if (result) {
              res.status(200).json(result);
            } else {
              res.status(404).send("user not found");
            }
          });
      } else if (element.showMessage == true) {
        notificationsModel
          .findOneAndUpdate(
            { _id: _id },
            { $set: { showMessage: false } },
            { new: true }
          )
          .then((result) => {
            if (result) {
              res.status(200).json(result);
            } else {
              res.status(404).send("user not found");
            }
          });
      }
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports = {
  updateShow,
  newNotifications,
  deleteotification,
  getNotifications,
};
