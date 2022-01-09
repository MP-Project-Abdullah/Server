const express = require("express");
const notificationsRouter = express.Router();
const authentication = require("../middlewear/authentication");
const authorization = require("../middlewear/authorization");
const {
  newNotifications,
  deleteotification,
  getNotifications,
  updateShow,
} = require("../controller/notifications");

// Create new notification
notificationsRouter.post(
  "/newNotif/:projectId/:userId",
  authentication,
  newNotifications
);

// Delete notification
notificationsRouter.delete(
  "/deleteNotif/:id",
  authentication,
  deleteotification
);

// Get notifications
notificationsRouter.get("/getNotif/:id", getNotifications);

// Show and hide notifications
notificationsRouter.put("/showHide/:_id", updateShow);

module.exports = notificationsRouter;
