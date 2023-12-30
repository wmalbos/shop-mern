const express = require("express");
const dbConnection = require('./mongodb.config');
const cors  = require('cors');
const dotEnv = require('dotenv');
const logger = require('../utils/logger');
const {HTTP_STATUS, ERROR_MESSAGES, INFOS_MESSAGES, ENVIROMENTS} = require("../utils/constants");
const app = express();

// Load .env variables
dotEnv.config();

if (![ENVIROMENTS.PRODUCTION, ENVIROMENTS.TEST, ENVIROMENTS.DEVELOPMENT].includes(process.env.NODE_ENV)) {
    logger.error(`Unknown environment: '${process.env.NODE_ENV}'.`);
    process.exit(0);
}

logger.info(`Starting environnement "${process.env.NODE_ENV}"`);

dbConnection();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Silence is golden.");
});

app.use('/categories', require('../routes/shop/category.route'));
app.use('/products', require('../routes/shop/product.route'));

// 404 Error Handler
app.use((req, res, next) => {
    res.status(HTTP_STATUS.NOT_FOUND).json({
        error: {
            msg: ERROR_MESSAGES.ENDPOINTS_NOT_FOUND
        }
    });
});

// Centralized Error Handler
app.use((err, req, res, next) => {
    //if (err instanceof CustomError) {
    //    return res.status(err.status).json({ message: err.message });
    //}

    logger.error(err.stack)
    return res.status(err.status || HTTP_STATUS.SERVER_ERROR).json({ message: err.message || ERROR_MESSAGES.SERVER_ERROR });
})

module.exports = app;