const express = require("express");
const paymentRouter = express.Router();

const { payment } = require("../controller/payment");

// Payment method
paymentRouter.post("/create-payment-intent", payment);

module.exports = paymentRouter;
