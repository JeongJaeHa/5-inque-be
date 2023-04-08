const express = require("express")
const router = express.Router();

const controller = require("../controllers/contorller");

router.post("/", controller.contact);
router.get("/getList", controller.getList);
router.patch("/delete", controller.deleteList);

module.exports = {
    router
}