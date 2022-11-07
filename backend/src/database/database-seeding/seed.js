import connectToDB from '../database-connection.js';
import buildDB from './utils/build-db.js';
import switchDB from './utils/switch-db.js';
import buildDatabaseTables from './utils/build-db-tables.js';

// DB connection
const dbConnection = connectToDB();
dbConnection.connect();

buildDB(dbConnection);

switchDB(dbConnection);

buildDatabaseTables(dbConnection);

dbConnection.end();
