import mysql from 'mysql2';
import MSQLStore from 'express-mysql-session';
import dbConfig from '../config/database-configs.js';
import dbConPool from '../database/database-connection.js';

const sessionStore = new MSQLStore({}, dbConPool);

export default sessionStore;
