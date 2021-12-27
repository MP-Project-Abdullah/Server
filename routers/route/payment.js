const express = require("express");
const paymentRouter = express.Router();

const { payment } = require("../controller/payment");

paymentRouter.post("/create-payment-intent", payment);

module.exports = paymentRouter;
