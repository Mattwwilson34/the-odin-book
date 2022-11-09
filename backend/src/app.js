import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import passport from 'passport';
import expressSession from 'express-session';
import login from './routes/login.js';
import auth from './routes/auth.js';
import './config/passport-setup.js';
// import createHttpError from 'http-errors';

const app = express();

// MIDDLEWARE
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// PASSPORT MIDDLEWARE
app.use(
  expressSession({
    name: 'The Odin Book',
    secret: 'SESS_SECRET',
    saveUninitialized: false,
    resave: false,
    cookie: {
      sameSite: false,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 1000 * 60 * 60 * 24,
      httpOnly: true,
    },
  }),
);
app.use(passport.initialize());
app.use(passport.session());

// ROUTES
app.use('/', login);
app.use('/auth', auth);

export default app;
