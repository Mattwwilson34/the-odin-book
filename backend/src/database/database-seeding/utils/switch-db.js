import * as dotenv from 'dotenv';
import * as sqlQueries from './sql-queries.js';
import connectToDB from '../../database-connection.js';

dotenv.config({
  path: '/Users/matthewwilson/Desktop/Coding/the-odin-project/the-odin-book/backend/.env',
});

// const db = connectToDB().promise();

const switchDB = async (db) => {
  try {
    await db.query(sqlQueries.useDB);
    console.log(`✅ Successfully switched to ${process.env.DB_DATABASE} DB`);
  } catch (err) {
    if (err) throw err;
  }
};

export default switchDB;
