const ENVIROMENTS = require("../utils/constants");

const config = {
    port: process.env.NODE_ENV === ENVIROMENTS.TEST ? process.env.PORT_TEST : process.env.PORT
};

module.exports = config;