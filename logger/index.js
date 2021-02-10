import winston from 'winston';

const winstonEnvOptions = {};
if (process.env.NODE_ENV === 'test') {
  winstonEnvOptions.silent = true;
}

const logger = winston.createLogger({
  levels: winston.config.syslog.levels,
  transports: [new winston.transports.Console({ level: 'info', ...winstonEnvOptions })],
});

export default logger;
