var express = require("express");
var router = express.Router();

var userController = require('../../controller/userController')

router.post("/create", userController.createUser);


module.exports = router;
