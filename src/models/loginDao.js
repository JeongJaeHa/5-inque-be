const { AppDataSource } = require("./datasource");

const login = async (info) => {
    return await AppDataSource.query(
        `
        SELECT * FROM admin WHERE user = '${info.id}' AND password = '${info.password}'
        `
    )
}

module.exports = {
    login
}