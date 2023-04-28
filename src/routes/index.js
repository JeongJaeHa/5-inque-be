const express = require("express");
const router = express.Router();
const Router = require("./contactRouter")
const loginRouter = require("./loginRouter")

router.use("/contact", Router.router)

router.use("/", Router.router)

router.use("/login", loginRouter.router)

module.exports = router;