import * as dotenv from 'dotenv';
import * as sqlQueries from './sql-queries.js';

dotenv.config({
  path: '/Users/matthewwilson/Desktop/Coding/the-odin-project/the-odin-book/backend/.env',
});

const buildDB = (dbConnection) => {
  dbConnection.query(sqlQueries.dropDB, (err) => {
    if (err) throw err;
    console.log(`💥 Successfully dropped ${process.env.DB_DATABASE} DB`);
  });

  dbConnection.query(sqlQueries.createDB, (err) => {
    if (err) throw err;
    console.log(`📀 Successfully created ${process.env.DB_DATABASE} DB`);
  });
};

export default buildDB;
