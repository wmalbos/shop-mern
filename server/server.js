const logger = require('./utils/logger');
const shutdownHandlers = require('./config/serverShutdownHandlers');
const app = require('./config/startup');
const config = require("./config/config");

// Start the server
const server = app.listen(config.PORT, () => {
    logger.info(`Server listening on ${config.PORT}`);
});

// Setup shut down error handlers
shutdownHandlers.init(server);

module.exports = server;