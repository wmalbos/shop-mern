const {INFOS_MESSAGES, ENVIROMENTS} = require("./utils/constants");
const logger = require('./utils/logger');
const shutdownHandlers = require('./config/serverShutdownHandlers');
const config = require("./config/config");

// Initialize the application
const app = require('./config/startup');

// Start the server
const server = app.listen(config.port, () => {
    logger.info(`Server listening on ${config.port}`);
});

// Setup shut down error handlers
shutdownHandlers.init(server);

module.exports = server;

