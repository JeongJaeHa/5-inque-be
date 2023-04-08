const express = require("express");
const router = express.Router();
const Router = require("./contactRouter")

router.use("/contact", Router.router)

module.exports = router;