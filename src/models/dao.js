const { AppDataSource } = require("./datasource");

const contact = async (info) => {
    return await AppDataSource.query(
        `
        INSERT INTO contact (username, email, phone, content) 
        VALUES('${info.username}', '${info.email}', '${info.phone}', '${info.content}')
        `
    )
}

const getList = async () => {
    return await AppDataSource.query(
        `
        SELECT * FROM contact
        `
    )
}

module.exports = {
    contact,
    getList
}