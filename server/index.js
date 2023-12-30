const express = require("express");
const dbConnection = require('./config/mongodb.config');
const cors  = require('cors');
const dotEnv = require('dotenv');
const logger = require('./utils/logger');
const {HTTP_STATUS, ERROR_MESSAGES, INFOS_MESSAGES} = require("./utils/constants");
const app = express();

// Load .env variables
dotEnv.config();

const PORT = process.env.PORT ||  3001;

dbConnection();

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send("Silence is golden.");
});

app.use('/products', require('./routes/shop/product.route'));

// 404 Error Handler
app.use((req, res, next) => {
    res.status(HttpStatus.NOT_FOUND).json({
        error: {
            msg: ERROR_MESSAGES.ENDPOINTS_NOT_FOUND
        }
    });
});

// Centralized Error Handler
app.use((err, req, res, next) => {
    if (err instanceof CustomError) {
        return res.status(err.status).json({ message: err.message });
    }

    logger.error(err.stack)
    return res.status(err.status || HTTP_STATUS.SERVER_ERROR).json({ message: err.message || ERROR_MESSAGES.SERVER_ERROR });
})

const server = app.listen(PORT, () => {
    logger.info(`Server listening on ${PORT}`);
});

// Shutdown handler
const shutDown = () => {
    logger.info(INFOS_MESSAGES.SERVER_SHUTTING_DOWN)
    server.close(() => {
        logger.info(INFOS_MESSAGES.SERVER_SHUTDOWN)
        process.exit(0);
    });
}

process.on('SIGINT', shutDown);
process.on('SIGTERM', shutDown);

// handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
    logger.error('Unhandled Rejection at:', promise, 'reason:', reason);
});


module.exports = app;

