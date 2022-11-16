import buildDB from './utils/build-db.js';
import switchDB from './utils/switch-db.js';
import buildDatabaseTables from './utils/build-db-tables.js';
import {
  insertUser,
  insertPost,
  insertComment,
  insertPostLike,
  insertCommentLike,
} from './utils/sql-queries.js';
import randomUser from './utils/random-user.js';
import randomPost from './utils/random-post.js';
import randomPostLike from './utils/random-post-like.js';
import randomComment from './utils/random-comment.js';
import randomCommentLike from './utils/random-comment-like.js';
import db from '../database-connection.js';
import delay from './utils/delay.js';
import getRandomNumber from './utils/random-number.js';

await buildDB(db);

await delay(2000);

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

// Get userIds from db
const [userIds] = await db.query('SELECT user_id from USERS');

// Add 20 random posts to database
for (let i = 0; i < 20; i += 1) {
  const post = randomPost(
    userIds[getRandomNumber(0, userIds.length - 1)].user_id,
  );
  try {
    await db.query(`USE the_odin_book`);
    await db.query(insertPost(post));
  } catch (err) {
    if (err) throw err;
  }
}

// Get postIds from db
const [postIds] = await db.query('SELECT post_id from USER_POST');

// Add 100 random comments to database
for (let i = 0; i < 100; i += 1) {
  const comment = randomComment(
    userIds[getRandomNumber(0, userIds.length - 1)].user_id,
    postIds[getRandomNumber(0, postIds.length - 1)].post_id,
  );
  try {
    await db.query(`USE the_odin_book`);
    await db.query(insertComment(comment));
  } catch (err) {
    if (err) throw err;
  }
}

// Add 200 random post likes to database
for (let i = 0; i < 200; i += 1) {
  const postLike = randomPostLike(
    userIds[getRandomNumber(0, userIds.length - 1)].user_id,
    postIds[getRandomNumber(0, postIds.length - 1)].post_id,
  );
  try {
    await db.query(`USE the_odin_book`);
    await db.query(insertPostLike(postLike));
  } catch (err) {
    if (err) throw err;
  }
}

// Get post comment id's from db
const [postCommentIds] = await db.query(
  'SELECT post_comment_id from post_comment',
);

// Add 200 random comments likes to database
for (let i = 0; i < 200; i += 1) {
  const commentLike = randomCommentLike(
    userIds[getRandomNumber(0, userIds.length - 1)].user_id,
    postCommentIds[getRandomNumber(0, postCommentIds.length - 1)]
      .post_comment_id,
  );
  try {
    await db.query(`USE the_odin_book`);
    await db.query(insertCommentLike(commentLike));
  } catch (err) {
    if (err) throw err;
  }
}

db.end();
