import config from './config.json';

const env = process.env.NODE_ENV || 'development';

const cfg = config[env];

cfg.port = process.env.APP_PORT || cfg.port;
cfg.authSecretKey = process.env.AUTH_KEY || cfg.authSecretKey;
cfg.hashRounds = process.env.HASH_ROUNDS || cfg.hashRounds;
cfg.authKeyExpiration = process.env.AUTH_KEY_EXPIRATION || cfg.authKeyExpiration;
cfg.docsPerPage = process.env.DOCS_PER_PAGE || cfg.docsPerPage;

export default cfg;
