const express = require("express");
const paymentRouter = express.Router();

// const app = express();
// This is your test secret API key.
const stripe = require("stripe")(
  "pk_test_51KBEWgBlTfbXgfFB3lobAEuagRzrzjcO1fz1dlHx6X0qckRqw4it9S42AN5ykJHAUlRpL1MvOTCC3ilX3dgT3N7l00016Vs2EE"
);

const { payment } = require("../controller/payment");

// app.use(express.static("public"));
// app.use(express.json());

const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400;
};

paymentRouter.post("/create-payment-intent", payment);

module.exports = paymentRouter;
