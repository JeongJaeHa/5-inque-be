const dao = require("../models/loginDao");
const Error = require("../middlewares/errorConstructor")


const login = async (info) => {
    const insert = await dao.login(info);
    return insert
}

module.exports = {
    login
}