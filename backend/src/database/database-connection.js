import * as dotenv from 'dotenv';
import mysql from 'mysql2';
import dbConfig from '../config/database-configs.js';
import dotenvConfig from '../config/dontenv-config.js';
import { log, success } from '../utils/console-log.js';

dotenv.config(dotenvConfig);

const dbConnectionPool = mysql.createPool(dbConfig);

dbConnectionPool.getConnection((err, conn) => {
  if (err) throw err;
  log('=================================================');
  log(success(`Successful connection to ${dbConfig.database} database.`));
  log('=================================================');
  dbConnectionPool.releaseConnection(conn);
});

const dbConPool = dbConnectionPool.promise();

export default dbConPool;
