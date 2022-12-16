import * as dotenv from 'dotenv';
import sessionStore from './session-setup.js';
import dotenvConfig from './dontenv-config.js';

dotenv.config(dotenvConfig);

const inProd = process.env.NODE_ENV === 'production';

const sessionConfig = {
  secret: process.env.SESSION_SECRET,
  name: process.env.SESSION_NAME,
  store: sessionStore,
  saveUninitialized: false,
  resave: false,
  cookie: {
    sameSite: `${inProd ? 'none' : 'lax'}`, // cross site // set lax while working with http:localhost, but none when in prod
    secure: `${inProd ? 'true' : 'auto'}`, // only https // auto when in development, true when in prod
    maxAge: 1000 * 60 * 60 * 24,
    httpOnly: true,
  },
};

export default sessionConfig;
