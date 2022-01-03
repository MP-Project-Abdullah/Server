const express = require("express");
const notificationsRouter = express.Router();

const {
  newNotifications,
  deleteotification,
  getNotifications,
  updateShow,
} = require("../controller/notifications");

// Create new notification
notificationsRouter.post("/newNotif/:projectId/:userId", newNotifications);

// Delete notification
notificationsRouter.delete("/deleteNotif/:id", deleteotification);

// Get notifications
notificationsRouter.get("/getNotif/:id", getNotifications);

// Show and hide notifications
notificationsRouter.put("/showHide/:_id", updateShow);

module.exports = notificationsRouter;
