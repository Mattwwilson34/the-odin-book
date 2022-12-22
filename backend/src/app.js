import express from 'express';
import * as path from 'path';
import morgan from 'morgan';
import cors from 'cors';
import passport from 'passport';
import expressSession from 'express-session';
import auth from './routes/auth.js';
import api from './routes/api.js';
import sessionConfig from './config/session-config.js';
import './config/passport-setup.js';
import './database/database-connection.js';

const app = express();

// CONFIGUE CURRENT DIRECTORY
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// MIDDLEWARE
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// PASSPORT MIDDLEWARE
app.use(expressSession(sessionConfig));
app.use(passport.initialize());
app.use(passport.session());

// ROUTES
app.use('/auth', auth);
app.use('/api', api);

app.use(function (err, req, res, next) {
  console.log(err);
});

export default app;
