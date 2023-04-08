const service = require("../services/service")
const Error = require("../middlewares/errorHandler")

const contact = async (req, res) => {
    const info = req.body.info
    await service.contact(info)
    res.status(200).json({ message: "success" })
}

const getList = async (req, res) => {
    const getList = await service.getList()
    res.status(200).json({ list : getList })
}

module.exports = {
    contact,
    getList
}