const dao = require("../models/dao");
const Error = require("../middlewares/errorConstructor")


const contact = async (info) => {
    const insert = await dao.contact(info);
    return insert
}

const getList = async () => {
    const getList = await dao.getList();
    return getList
}

module.exports = {
    contact,
    getList
}