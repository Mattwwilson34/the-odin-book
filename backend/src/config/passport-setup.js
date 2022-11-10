import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import * as dotenv from 'dotenv';
import connectToDB from '../database/database-connection.js';
import randomUser from '../database/database-seeding/utils/random-user.js';
import { insertUser } from '../database/database-seeding/utils/sql-queries.js';
import chalk from 'chalk';

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
      console.log(profile);
      const db = connectToDB();
      db.query(
        `SELECT * FROM the_odin_book.users WHERE user_id = ${profile.id}`,
        async (err, results) => {
          if (err) throw new Error(err);

          //! MYSQL QUERY EMPTY NO USER IN DB
          if (!Array.isArray(results) || !results.length) {
            //
            console.log(chalk.red('No user in DB'));

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
            db.query(insertUser(newUser), (err, results) => {
              if (err) throw err;
              console.log(results);
            });
          }

          //! USER FOUND IN DB
          else {
            console.log(results);
          }
          // Close DB connection
          await db.close();
          console.log(chalk.yellow('DB connection closed'));
        },
      );
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
