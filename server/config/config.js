const ENVIROMENTS = require("../utils/constants").ENVIROMENTS;

const config = {
    PORT: process.env.NODE_ENV === ENVIROMENTS.TEST ? process.env.PORT_TEST : process.env.PORT
};

module.exports = config;