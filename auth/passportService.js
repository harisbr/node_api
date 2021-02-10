import passport from 'passport';

const requireLogin = passport.authenticate('local', { session: false });
const requireAuth = passport.authenticate('jwt', { session: false });

export {
  requireLogin,
  requireAuth,
};
