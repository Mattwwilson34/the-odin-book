import connectToDB from '../database-connection.js';
import buildDB from './utils/build-db.js';
import switchDB from './utils/switch-db.js';
import buildDatabaseTables from './utils/build-db-tables.js';
import { insertUser } from './utils/sql-queries.js';
import randomUser from './utils/random-user.js';

// DB connection
const dbConnection = connectToDB();
dbConnection.connect();

buildDB(dbConnection);

switchDB(dbConnection);

buildDatabaseTables(dbConnection);

// Add 10 random users to database
try {
  for (let i = 0; i < 10; i += 1) {
    const user = randomUser();
    dbConnection.query(insertUser(user), (err) => {
      if (err) throw err;
    });
  }
} catch (err) {
  if (err) throw err;
}

dbConnection.end();
