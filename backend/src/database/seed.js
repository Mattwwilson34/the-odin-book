import connectToDB from './database-connection.js';
import buildDB from './build-db.js';
import switchDB from './switch-db.js';
import buildDatabaseTables from './build-db-tables.js';

// DB connection
const dbConnection = connectToDB();
dbConnection.connect();

buildDB(dbConnection);

switchDB(dbConnection);

buildDatabaseTables(dbConnection);

dbConnection.end();
