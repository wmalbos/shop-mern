const mongoose = require("mongoose");
const logger = require('../utils/logger');
const {DATABASE} = require("../utils/constants");

/**
 * Sets up event listeners for the database connection using Mongoose.
 *
 * @function setupDatabaseEventListeners
 * @returns {undefined}
 */
const setupDatabaseEventListeners = () => {
    mongoose.connection.on('connecting', () => {
        logger.info(DATABASE.CONNECTING)
    });

    mongoose.connection.on('connected', () => {
        logger.info(DATABASE.CONNECTED)
    });

    mongoose.connection.on('disconnecting', () => {
        logger.info(DATABASE.DISCONNECTING)
    });

    mongoose.connection.on('disconnected', () => {
        logger.info(DATABASE.DISCONNECTED)
    });

    mongoose.connection.on('close', () => {
        logger.info(DATABASE.CLOSE)
    });

    mongoose.connection.on('reconnected', () => {
        logger.info(DATABASE.RECONNECTED);
    });

    mongoose.connection.on('error', (err) => {
        logger.error(DATABASE.ERROR(err));
    });
}

/**
 * Closes the mongoose connection, logs the database close message,
 * and gracefully exits the process.
 * If there is an error while closing the connection, logs the error and exits with status code 1.
 * Otherwise, exits with status code 0.
 *
 * @function gracefulExit
 * @returns {void}
 */
const gracefulExit = () => {
    mongoose.connection.close().then(() => {
        logger.info(DATABASE.CLOSE);
        process.exit(0);
    }).catch((err) => {
        logger.error(DATABASE.ERROR(err));
        process.exit(1);
    });
}

/**
 * Establishes a connection to the database.
 *
 * @async
 * @function connection
 * @returns {void}
 * @throws {Error} If an error occurs during the connection process.
 */
const connection = async () => {
    const DATABASE_URL = process.env.DATABASE_URL.replace(/:\/\/(.*):(.*)@/, "://<username>:<password>@");

    try {
        if (
            mongoose.connection.readyState === mongoose.Connection.STATES.connected ||
            mongoose.connection.readyState === mongoose.Connection.STATES.connecting
        ) {
            return;
        }

        setupDatabaseEventListeners();

        await mongoose.connect(DATABASE_URL);

        process.on('SIGINT', gracefulExit).on('SIGTERM', gracefulExit);

    } catch (error) {
        logger.error(DATABASE.ERROR(error));
        throw error;
    }
}

module.exports = connection;