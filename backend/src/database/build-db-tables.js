import * as sqlQueries from './sql-queries.js';

const buildDatabaseTables = (dbConnection) => {
  dbConnection.query(sqlQueries.createTableUsers, (err) => {
    if (err) throw err;
    console.log('📝 Successfully created Users table');
  });

  dbConnection.query(sqlQueries.createTableFriends, (err) => {
    if (err) throw err;
    console.log('📝 Successfully created Friends table');
  });

  dbConnection.query(sqlQueries.createTableUserPost, (err) => {
    if (err) throw err;
    console.log('📝 Successfully created User Posts table');
  });

  dbConnection.query(sqlQueries.createTablePostComment, (err) => {
    if (err) throw err;
    console.log('📝 Successfully created Post Comments table');
  });

  dbConnection.query(sqlQueries.createTablePostLike, (err) => {
    if (err) throw err;
    console.log('📝 Successfully created Post Likes table');
  });

  dbConnection.query(sqlQueries.createTableCommentLike, (err) => {
    if (err) throw err;
    console.log('📝 Successfully created Comment Likes table');
  });
};

export default buildDatabaseTables;
