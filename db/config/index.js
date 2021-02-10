import config from './config.json';

const env = process.env.NODE_ENV || 'development';

const cfg = config[env];

cfg.username = process.env.DB_USERNAME || cfg.username;
cfg.password = process.env.DB_PASSWORD || cfg.password;
cfg.database = process.env.DB_NAME || cfg.database;
cfg.host = process.env.DB_HOST || cfg.host;
cfg.port = process.env.DB_PORT || cfg.port;
cfg.dialect = process.env.DB_DIALECT || cfg.dialect;

export default cfg;
