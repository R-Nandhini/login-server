let express = require("express");
let api = express.Router();

let userRoutes = require('./router/user');
let customerroute= require('./router/customer');
api.use("/user", userRoutes);
api.use("/customer", customerroute);

module.exports = api;