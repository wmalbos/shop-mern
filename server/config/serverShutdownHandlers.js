const logger = require('../utils/logger');
const { INFOS_MESSAGES } = require("../utils/constants");

exports.init = (server) => {
    process.on('SIGINT', () => shutDown(server));
    process.on('SIGTERM', () => shutDown(server));

    // handle unhandled promise rejections
    process.on('unhandledRejection', (reason, promise) => {
        logger.error('Unhandled Rejection at:', promise, 'reason:', reason);
    });
}

function shutDown(server) {
    logger.info(INFOS_MESSAGES.SERVER_SHUTTING_DOWN);
    server.close(() => {
        logger.info(INFOS_MESSAGES.SERVER_SHUTDOWN);
        process.exit(0);
    });
}