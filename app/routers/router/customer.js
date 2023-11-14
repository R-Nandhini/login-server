var express = require("express");
var router = express.Router();

var customerController = require('../../controller/customerController')

router.post("/create", customerController.createCustomer);


module.exports = router;
