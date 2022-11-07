import * as dotenv from 'dotenv';
import * as sqlQueries from './sql-queries.js';

dotenv.config({
  path: '/Users/matthewwilson/Desktop/Coding/the-odin-project/the-odin-book/backend/.env',
});

const switchDB = (dbConnection) => {
  dbConnection.query(sqlQueries.useDB, (err) => {
    if (err) throw err;
    console.log(`✅ Successfully switched to ${process.env.DB_DATABASE} DB`);
  });
};

export default switchDB;
