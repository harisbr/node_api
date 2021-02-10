import logger from '../logger';
import ValidationError from './ValidationError';

export default (handler) => async (req, res, next) => {
  try {
    logger.info(`${req.method} ${req.path}`);
    const data = await handler(req, res, next);
    if (data === null && req.method === 'DELETE') return res.status(204).send();
    if (data === null && req.method === 'GET') return res.status(404).send();
    if (data && data.status && data.message) {
      const { status, message } = data;
      return res.status(status).send({ message });
    }
    return res.send(data);
  } catch (e) {
    if (e instanceof ValidationError) {
      logger.error(`Validation error -> ${e.getError()}`);
      return res.status(400).send(e.getError());
    }
    console.log(e);
    logger.error(e.message);
    return res.status(500).send('Internal Server Error');
  }
};
