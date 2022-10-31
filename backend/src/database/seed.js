import connectToDB from './database-connection.js';
import * as sqlQueries from './sql-queries.js';

// DB connection
const dbConnection = connectToDB();
dbConnection.connect();

// Drop the_odin_book
dbConnection.query(sqlQueries.dropDB, (err) => {
  if (err) throw err;
  console.log('🤯 Successfully dropped the_odin_book DB');
});

// Add the_odin_book DB
dbConnection.query(sqlQueries.createDB, (err) => {
  if (err) throw err;
  console.log('✅ Successfully created the_odin_book DB');
});

dbConnection.query(sqlQueries.useDB, (err) => {
  if (err) throw err;
  console.log('✅ Successfully switched to the_odin_book DB');
});

dbConnection.query(sqlQueries.createTableUsers, (err) => {
  if (err) throw err;
  console.log('✅ Successfully created Users table');
});

dbConnection.query(sqlQueries.createTableUserPost, (err) => {
  if (err) throw err;
  console.log('✅ Successfully created User Posts table');
});

dbConnection.query(sqlQueries.createTablePostComment, (err) => {
  if (err) throw err;
  console.log('✅ Successfully created Post Comments table');
});

dbConnection.query(sqlQueries.createTableCommentLike, (err) => {
  if (err) throw err;
  console.log('✅ Successfully created Comment Like table');
});

dbConnection.query(sqlQueries.createTableFriends, (err) => {
  if (err) throw err;
  console.log('✅ Successfully created Friends table');
});

dbConnection.query(sqlQueries.createTablePostLike, (err) => {
  if (err) throw err;
  console.log('✅ Successfully created Post Like table');
});

dbConnection.end();
