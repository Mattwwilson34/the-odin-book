import * as dotenv from 'dotenv';
import dotenvConfig from './dontenv-config.js';

dotenv.config(dotenvConfig);

const dbConfigSeeding = {
  host: process.env.DB_HOST,
  user: process.env.DB_SEED_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_TEMP_DATABASE,
  socketPath: process.env.DB_SOCKET_PATH,
  multipleStatements: true,
};

export default dbConfigSeeding;
