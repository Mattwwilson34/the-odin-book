import * as dotenv from 'dotenv';
import dotenvConfig from './dontenv-config.js';

dotenv.config(dotenvConfig);

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  socketPath: process.env.DB_SOCKET_PATH,
};

export default dbConfig;
