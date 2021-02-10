import AuthorizationError from '../helpers/AuthorizationError';

const validateRoles = (...roles) => (payload, res, next) => {
  const isRoleValid = roles.find((role) => payload.user.role === role);
  if (!isRoleValid) {
    throw new AuthorizationError({ message: 'You don\'t have required role for this action' });
  }
  next();
};

export default validateRoles;
