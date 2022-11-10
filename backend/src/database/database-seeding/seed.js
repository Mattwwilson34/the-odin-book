import buildDB from './utils/build-db.js';
import switchDB from './utils/switch-db.js';
import buildDatabaseTables from './utils/build-db-tables.js';
import { insertUser } from './utils/sql-queries.js';
import randomUser from './utils/random-user.js';
import db from '../database-connection.js';

await buildDB(db);

await switchDB(db);

await buildDatabaseTables(db);

// Add 10 random users to database
for (let i = 0; i < 10; i += 1) {
  const user = randomUser();
  try {
    await db.query(`USE the_odin_book`);
    await db.query(insertUser(user));
  } catch (err) {
    if (err) throw err;
  }
}

db.end();
