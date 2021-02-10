import ValidationError from './ValidationError';

const validationOptions = {
  errors:
  { wrap: { label: '' } },
  abortEarly: false,
};

const validate = (objectToValidate, schema) => {
  const { error } = schema.validate(objectToValidate, validationOptions);
  if (error) {
    const errors = [];
    error.details.forEach((err) => {
      errors.push({
        type: err.type,
        property: err.path.join('.'),
        message: err.message,
      });
    });
    throw new ValidationError({ errors });
  }
};

const validateObjectId = (id) => id.match(/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/);

export {
  validate,
  validateObjectId,
};
