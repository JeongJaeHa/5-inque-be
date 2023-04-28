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

const deleteList = async (clearList) => {
    try {
            for(let i=0; i<clearList.length; i++) {
                let clearId = clearList[i];
                await dao.checkList(clearId);
            }
            return true;
            
        } catch (e) {
            console.log(e)
        }


    
    return deleteList
}

module.exports = {
    contact,
    getList,
    deleteList
}