const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const routes = require("./src/routes");

const createApp = () => {
    const app = express();
    app.use(express.static('public'));
    app.use(cors({
        origin: '*',
    }));
    app.use(morgan('dev'));
    app.use(express.json());
    app.use(routes);

    return app;
}

module.exports = { createApp };