import buildDatabaseSchema from './utils/build-db-schema.js';
import * as insert from './utils/sql-data-insert-functions.js';
import db from '../database-connection.js';

await db.query('DROP DATABASE IF EXISTS the_odin_book');

await buildDatabaseSchema();

setTimeout(async () => {
  await db.query(`USE the_odin_book`);
}, 1000);

setTimeout(async () => {
  await insert.insertRandomUserToDB();
  await insert.insertRandomPostToDB();
  await insert.insertRandomCommentToDB();
  await insert.insertRandomCommentLikeToDB();
  await insert.insertRandomPostLikeToDB();
  await insert.insertRandomFriendshipsToDB();

  db.end();
}, 2000);
