import Joi from 'joi';

export default {
  insertSchema: Joi.object()
    .keys({
      name: Joi.string().required(),
      address: Joi.string().required(),
      description: Joi.string().required(),
      imageUrl: Joi.string(),
      latitude: Joi.number().precision(6),
      longitude: Joi.number().precision(6),
    }).required(),
  updateSchema: Joi.object()
    .keys({
      name: Joi.string(),
      address: Joi.string(),
      description: Joi.string(),
      imageUrl: Joi.string(),
      latitude: Joi.number().precision(6),
      longitude: Joi.number().precision(6),
    }).required(),
};
