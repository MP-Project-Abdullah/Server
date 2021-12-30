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

notificationsRouter.post("/newNotif/:projectId/:userId", newNotifications);
notificationsRouter.delete("/deleteNotif/:id", deleteotification);

notificationsRouter.get("/getNotif/:id", getNotifications);

notificationsRouter.put("/showHide/:_id", updateShow);

module.exports = notificationsRouter;
