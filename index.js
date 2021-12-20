const express = require("express");
require("dotenv").config();
const cors = require("cors");
require("./db");

// App
const app = express();
app.use(express.json());
app.use(cors());

// Routers
//User
const userRouter = require("./routers/route/user");
app.use(userRouter);

// Role
const roleRouter = require("./routers/route/role");
app.use(roleRouter);

// PORT
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`SERVER RUNNING ON ${PORT}`);
});
