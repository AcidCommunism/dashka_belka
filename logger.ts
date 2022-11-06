import * as winston from 'winston';

const logConfig = {
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp(),
        winston.format.splat(),
        winston.format.label({
            label: '🤖🐿',
        }),
        winston.format.printf(
            ({ timestamp, level, message, service, label }) => {
                return `[${timestamp}] ${service} ${level}: ${label} ${JSON.stringify(
                    message,
                    null,
                    4
                )}`;
            }
        )
    ),
    defaultMeta: { service: 'dashka-belka' },
    transports: [
        new winston.transports.Console({ level: 'info' }),
        new winston.transports.File({
            level: 'error',
            filename: `${__dirname}/log/error.log`,
        }),
        new winston.transports.File({
            filename: `${__dirname}/log/combined.log`,
        }),
    ],
};

export const logger: winston.Logger = winston.createLogger(logConfig);
