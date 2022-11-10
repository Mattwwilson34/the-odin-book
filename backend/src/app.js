import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import passport from 'passport';
import expressSession from 'express-session';
import login from './routes/login.js';
import auth from './routes/auth.js';
import './config/passport-setup.js';
import sessionConfig from './config/session-config.js';

const app = express();

// MIDDLEWARE
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// PASSPORT MIDDLEWARE
app.use(expressSession(sessionConfig));
app.use(passport.initialize());
app.use(passport.session());

// ROUTES
app.use('/', login);
app.use('/auth', auth);

export default app;
