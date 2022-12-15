import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as LocalStrategy } from 'passport-local';
import bcrypt from 'bcrypt';
import * as dotenv from 'dotenv';
import dotenvConfig from './dontenv-config.js';
import db from '../database/database-connection.js';
import { randomUser } from '../database/database-seeding/utils/fake-data-generators.js';
import { insertUser } from '../database/database-seeding/utils/sql-queries.js';
import { log, danger } from '../utils/console-log.js';
import chalk from 'chalk';

dotenv.config(dotenvConfig);

// LOCAL STRATEGY
passport.use(
  new LocalStrategy(async function (username, password, done) {
    console.log(chalk.blue('===================='));
    console.log(chalk.blue('LOCAL STRATEGY'));
    console.log(chalk.blue('===================='));

    const sql = 'SELECT * FROM Users WHERE email= ?';
    const email = username;

    try {
      const [userArray] = await db.query(sql, [email]);

      console.log(chalk.blue('============================='));
      console.log(chalk.blue('LOCAL STRAT USER ARRAY FROM DB'));
      console.log(chalk.blue('============================='));
      console.log(chalk.red('============================='));
      console.log(chalk.red('userArray'));
      console.log(userArray);
      console.log(chalk.red('============================='));

      if (userArray.length === 0) {
        return done(null, false);
      }

      const validPassword = await bcrypt.compare(
        password,
        userArray[0].password,
      );

      if (!validPassword) {
        return done(null, false);
      }
      console.log(chalk.blue('============================='));
      console.log(chalk.blue('USERNAME + PASSWORD VALID'));
      console.log(chalk.blue('============================='));
      console.log(chalk.blue('============================='));
      console.log(chalk.blue('LOCAL STRAT USER ID BEING SENT TO DONE'));
      console.log(chalk.blue('============================='));
      console.log(chalk.red('============================='));
      console.log({ id: userArray[0].userID });
      console.log(chalk.red('============================='));

      return done(null, { id: userArray[0].userID });
    } catch (err) {
      if (err) {
        return done(err);
      }
    }
  }),
);

// GOOGLE STRATEGY
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
          `SELECT * FROM the_odin_book.users WHERE userID = ${profile.id}`,
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
            profilePicture: profile._json.picture,
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
  console.log(chalk.blue('============================='));
  console.log(chalk.blue('SERIALIZE USER FUNC + USER PARAM'));
  console.log(chalk.blue('============================='));
  console.log(chalk.red('============================='));
  console.log(user);
  console.log(chalk.red('============================='));
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  //
  console.log(chalk.blue('============================='));
  console.log(chalk.blue('DESERIALIZE USER FUNC + ID param'));
  console.log(chalk.blue('============================='));
  console.log(chalk.red('============================='));
  console.log(id);
  console.log(chalk.red('============================='));

  const sql = `SELECT * FROM the_odin_book.Users WHERE userID= ?`;

  const [userArray] = await db.execute(sql, [id]);

  console.log(chalk.blue('============================='));
  console.log(chalk.blue('DESERIALIZE USER FUNC + USER RETURNED FROM DB'));
  console.log(chalk.blue('============================='));
  console.log(chalk.red('============================='));
  console.log(userArray[0]);
  console.log(chalk.red('============================='));

  done(null, userArray[0]);
});

export default passport;
