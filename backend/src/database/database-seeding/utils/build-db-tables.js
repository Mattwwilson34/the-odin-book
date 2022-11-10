import * as sqlQueries from './sql-queries.js';
import connectToDB from '../../database-connection.js';

// const db = connectToDB().promise();

const buildDatabaseTables = async (db) => {
  try {
    await db.query(sqlQueries.createTableUsers);
    console.log('📝 Successfully created Users table');
  } catch (err) {
    if (err) throw err;
  }

  try {
    await db.query(sqlQueries.createTableFriends);
    console.log('📝 Successfully created Friends table');
  } catch (err) {
    if (err) throw err;
  }

  try {
    await db.query(sqlQueries.createTableUserPost);
    console.log('📝 Successfully created User Posts table');
  } catch (err) {
    if (err) throw err;
  }

  try {
    await db.query(sqlQueries.createTablePostComment);
    console.log('📝 Successfully created Post Comments table');
  } catch (err) {
    if (err) throw err;
  }

  try {
    await db.query(sqlQueries.createTablePostLike);
    console.log('📝 Successfully created Post Likes table');
  } catch (err) {
    if (err) throw err;
  }

  try {
    await db.query(sqlQueries.createTableCommentLike);
    console.log('📝 Successfully created Comment Likes table');
  } catch (err) {
    if (err) throw err;
  }
};

export default buildDatabaseTables;
