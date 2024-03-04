const express = require("express");
const employee = require('./employee')

const router = express.Router();

router.use("/task", employee);

module.exports = router;
