const express = require("express");
const dotenv = require("dotenv");
// const bodyParser = require("body-parser");

dotenv.config();

// require("./utils/db");
// const Feedback = require("./model/feedback");

const app = express();
app.use(express.json());
// app.use(bodyParser.json());

app.use("/user", require("./apps/users/UserControllers"));
app.use("/brand", require("./apps/vehicle_brands/Vehicle_BrandControllers"));
app.use("/vehicle", require("./apps/vehicles/VehicleControllers"));
// app.use("/order", require("./apps/orders/OrderControllers"));

module.exports = app;
