import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import './auth/passportConfig';
import config from './config';
import routes from './routes';
import logger from './logger';
import AuthorizationError from './helpers/AuthorizationError';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(routes);
app.use('/test', (req, res) => res.send('Hello World'));

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  if (err instanceof AuthorizationError) {
    logger.error(`Authorization error -> ${err.getError()}`);
    return res.status(403).send(err.getError());
  }
  logger.error(err.message);
  return res.status(500).send('Internal Server Error');
});

app.listen(config.port, () => {
  logger.info(`App listening on port ${config.port}`);
  // console.log(`App listening on port ${config.port}`);
});

export default app;
