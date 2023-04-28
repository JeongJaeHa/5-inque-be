const http = require("http");
const https = require("https");
const fs = require("fs");
require("dotenv").config();

const { createApp } = require("./app");
const { AppDataSource, AppDataSourceRead } = require("./src/models/datasource");

const startServer = async () => {
    const app = createApp();

    const options = {
        key: fs.readFileSync('./rootca.key'),
        cert: fs.readFileSync('./rootca.crt')
        };

    app.get("/ping", (req, res) => {
        res.json({ message: "pong" });
    });

    const httpServer = http.createServer(app);
    const httpsServer = https.createServer(options, app);
    const HTTPPORT = process.env.HTTPPORT;
    const HTTPSPORT = process.env.HTTPSPORT;

    await AppDataSource.initialize()
        .then(() => {
            console.log("Data Source has been initialized");
        })
        .catch((err) => {
            console.error("Error during Data Source initialization", err);
            database.destroy()
        })

    // await AppDataSourceRead.initialize()
    //     .then(() => {
    //         console.log("Read Data Source has been initialized");
    //     })
    //     .catch((err) => {
    //         console.error("Error during Data Source initialization", err);
    //         database.destroy()
    //     })

    httpServer.listen(HTTPPORT, () => {
        console.log(`Listening on Port ${HTTPPORT}`);
    });

    httpsServer.listen(HTTPSPORT, () => {
        console.log(`Listening on Port ${HTTPSPORT}`);
    });

}

startServer();