import mysql from 'mysql';
import { readFileSync } from 'node:fs';
import { log, warn, success } from '../../../utils/console-log.js';

const runSQLFile = (databaseConfigObj, sqlFilePath) => {
  //
  // Read sql query from file
  const sql = readFileSync(sqlFilePath).toString().trim();

  // Connect to SQL db via mysql
  const db = mysql.createConnection(databaseConfigObj);

  db.connect((err) => {
    if (err) throw err;
    log(warn('✅ mysql connected to run SQLfile. Connection ID:', db.threadId));
  });

  // run sql query from file
  db.query(sql, (err) => {
    if (err) throw err;
    log(success('✅ Successfully ran SQL file against database'));
  });

  db.end((err) => {
    if (err) throw err;
    log(success('✅ mysql connection terminated.'));
  });
};

export default runSQLFile;
