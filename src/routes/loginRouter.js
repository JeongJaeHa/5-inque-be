const express = require("express")
const router = express.Router();

const controller = require("../controllers/loginContorller");

router.post("/", controller.login);

module.exports = {
    router
}