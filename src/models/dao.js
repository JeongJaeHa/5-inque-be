const { AppDataSource } = require("./datasource");

const contact = async (info) => {
    return await AppDataSource.query(
        `
        INSERT INTO contacts (username, email, phone, content) 
        VALUES('${info.username}', '${info.email}', '${info.phone}', '${info.content}')
        `
    )
}

const getList = async () => {
    return await AppDataSource.query(
        `
        SELECT * FROM contacts WHERE status = 1
        `
    )
}

const checkList = async (clearId) => {
    const check = await AppDataSource.query(
        `SELECT * FROM contacts WHERE id = '${clearId}'`
    )

    if (!check) throw new Error('Not Exist Content')

    await AppDataSource.query(
        `UPDATE contacts
        SET status = 2
        WHERE id = '${clearId}'`
    )
}

module.exports = {
    contact,
    getList,
    checkList
}