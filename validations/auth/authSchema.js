import Joi from 'joi';

export default {
  insertSchema: Joi.object()
    .keys({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    }),
};
