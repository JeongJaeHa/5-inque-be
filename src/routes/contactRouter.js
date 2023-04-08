const express = require("express")
const router = express.Router();

const controller = require("../controllers/contorller");

router.post("/", controller.contact);
router.get("/getList", controller.getList);

module.exports = {
    router
}