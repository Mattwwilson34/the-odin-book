import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import * as dotenv from 'dotenv';
import dotenvConfig from './dontenv-config.js';
import db from '../database/database-connection.js';
import randomUser from '../database/database-seeding/utils/random-user.js';
import { insertUser } from '../database/database-seeding/utils/sql-queries.js';
import { log, danger } from '../utils/console-log.js';

dotenv.config(dotenvConfig);

passport.use(
  new GoogleStrategy(
    {
      // options for strategy
      clientID: process.env.GOOGLE_STRAT_CLIENT_ID,
      clientSecret: process.env.GOOGLE_STRAT_SECRET,
      callbackURL: '/auth/google/redirect',
    },
    async (request, accessToken, refreshToken, profile, done) => {
      try {
        const [rows, fields] = await db.query(
          `SELECT * FROM the_odin_book.users WHERE user_id = ${profile.id}`,
        );

        //! MYSQL QUERY EMPTY NO USER IN DB
        if (!Array.isArray(rows) || !rows.length) {
          //
          log(danger('NO USER FOUND IN DB'));

          // Create new user
          let newUser = randomUser();
          newUser = {
            ...newUser,
            id: profile._json.sub,
            firstName: profile._json.given_name,
            lastName: profile._json.family_name,
            email: profile._json.email,
          };

          // Save new user to DB
          try {
            const response = await db.query(insertUser(newUser));
            log(response);
          } catch (err) {
            if (err) throw err;
          }
        }

        //! USER FOUND IN DB
        else {
          log(rows);
        }
      } catch (err) {
        if (err) throw err;
      }
      done(null, profile);
    },
  ),
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const [rows] = await db.query(
    `SELECT * FROM the_odin_book.users WHERE user_id = ${id}`,
  );
  done(null, rows[0]);
});

export default passport;
