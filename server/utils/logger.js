const winston = require('winston');
const DailyRotateFile = require('winston-daily-rotate-file');

const { combine, timestamp, printf, errors, json } = winston.format;

const customFormat = printf(({ level, message, timestamp, stack, ...metadata }) => {
    let msg = `${timestamp} [${level}]: ${message} `
    if (stack) {
        msg += stack
    }
    if (metadata && Object.keys(metadata).length > 0 ) {
        msg += JSON.stringify(metadata)
    }
    return msg
});

const options = {
    console: {
        level: process.env.NODE_ENV === 'development' ? 'debug' : 'info',
        handleExceptions: true,
        format: combine(
            winston.format.colorize(),
            customFormat
        )
    },
    file: {
        level: 'info',
        filename: `./logs/app.log`,
        handleExceptions: true,
        format: combine(
            timestamp(),
            errors({ stack: true }),  // Print stack trace
            json()  // Log in JSON format
        ),
        maxsize: 5242880,  // 5MB
        maxFiles: 5,
    },
    rotate: {
        level: 'info',
        handleExceptions: true,
        format: combine(
            timestamp(),
            errors({ stack: true }),
            json()
        ),
        dirname: './logs',
        datePattern: 'YYYY-MM-DD',
        filename: 'app-%DATE%.log',
    }
};

const logger = winston.createLogger({
    transports: [
        new winston.transports.Console(options.console),
        new winston.transports.File(options.file),
        new DailyRotateFile(options.rotate),
    ],
    exitOnError: false,
});

module.exports = logger;