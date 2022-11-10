import mysql from 'mysql2';
import MSQLStore from 'express-mysql-session';
import dbConfig from '../config/database-configs.js';

const pool = mysql.createPool(dbConfig);
const promisePool = pool.promise();

const sessionStore = new MSQLStore({}, promisePool);

export default sessionStore;
