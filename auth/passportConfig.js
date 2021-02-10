import passport from 'passport';
import bcrypt from 'bcrypt';
import LocalStrategy from 'passport-local';
import { ExtractJwt, Strategy as JwtStrategy } from 'passport-jwt';
import authValidation from '../validations/auth/authValidation';
import ServiceFactory from '../services/ServiceFactory';
import config from '../config';

const sf = new ServiceFactory();

passport.use(new LocalStrategy(async (email, password, done) => {
  await authValidation.validateInsertRequest({ email, password });
  const service = await sf.getUsersService();
  const userExist = await service.getByAttribute({ email });

  if (!userExist) return done(null, false);

  const user = userExist[0];
  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) return done(null, false);

  return done(null, user);
}));

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.authSecretKey,
};

passport.use(new JwtStrategy(jwtOptions, async (payload, done) => done(null, payload)));
