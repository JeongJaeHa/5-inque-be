const loginService = require("../services/loginService")
const Error = require("../middlewares/errorHandler")

const login = async (req, res) => {
    const info = req.body.info
    await loginService.login(info)
    res.status(200).json({ message: "success" })
}

module.exports = {
    login
}