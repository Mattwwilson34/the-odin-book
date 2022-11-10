import * as dotenv from 'dotenv';
import sessionStore from './session-setup.js';
import dotenvConfig from './dontenv-config.js';

dotenv.config(dotenvConfig);

const sessionConfig = {
  secret: process.env.SESSION_SECRET,
  name: process.env.SESSION_NAME,
  store: sessionStore,
  saveUninitialized: false,
  resave: false,
  cookie: {
    sameSite: false,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 1000 * 60 * 60 * 24,
    httpOnly: true,
  },
};

export default sessionConfig;
