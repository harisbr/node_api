import jwt from 'jsonwebtoken';
import config from '../config';

const generateToken = async (payload) => jwt.sign(
  payload, config.authSecretKey, { expiresIn: config.authKeyExpiration },
);

export default generateToken;
