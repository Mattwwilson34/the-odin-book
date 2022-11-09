import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import * as dotenv from 'dotenv';

dotenv.config({
  path: '/Users/matthewwilson/Desktop/Coding/the-odin-project/the-odin-book/backend/.env',
});

passport.use(
  new GoogleStrategy(
    {
      // options for strategy
      clientID: process.env.GOOGLE_STRAT_CLIENT_ID,
      clientSecret: process.env.GOOGLE_STRAT_SECRET,
      callbackURL: '/auth/google/redirect',
    },
    (request, accessToken, refreshToken, profile, done) => {
      done(null, profile);
    },
  ),
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

export default passport;
