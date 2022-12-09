import * as sqlQuery from './sql-queries.js';
import * as fakeData from './fake-data-generators.js';
import getRandomNumber from './random-number.js';
import db from '../../database-connection.js';
import { log, success } from '../../../utils/console-log.js';
import { getRandomUserID } from './friends-table-utils/getRandomUserID.js';

const insertRandomUserToDB = async (numberOfUsers = 10) => {
  for (let i = 0; i < numberOfUsers; i += 1) {
    const user = fakeData.randomUser();
    try {
      await db.query(`USE the_odin_book`);
      await db.query(sqlQuery.insertUser(user));
    } catch (err) {
      if (err) throw err;
    }
  }
  log(success(`✅ Added ${numberOfUsers} users to the User Table`));
};

const insertRandomPostToDB = async (numberOfPosts = 20) => {
  // Get userIds from db
  const [userIds] = await db.query('SELECT userID from Users');

  for (let i = 0; i < numberOfPosts; i += 1) {
    const post = fakeData.randomPost(
      userIds[getRandomNumber(0, userIds.length - 1)].userID,
    );
    try {
      await db.query(sqlQuery.insertPost(post));
    } catch (err) {
      if (err) throw err;
    }
  }
  log(success(`✅ Added ${numberOfPosts} posts to the UserPost Table`));
};

const insertRandomCommentToDB = async (numberOfComments = 100) => {
  // Get userIds from db
  const [userIds] = await db.query('SELECT userID from Users');
  // Get postIds from db
  const [postIds] = await db.query('SELECT postID from UserPost');

  for (let i = 0; i < numberOfComments; i += 1) {
    const comment = fakeData.randomComment(
      userIds[getRandomNumber(0, userIds.length - 1)].userID,
      postIds[getRandomNumber(0, postIds.length - 1)].postID,
    );
    try {
      await db.query(sqlQuery.insertComment(comment));
    } catch (err) {
      if (err) throw err;
    }
  }
  log(
    success(
      `✅ Added ${numberOfComments} post comments to the PostComment Table`,
    ),
  );
};

const insertRandomCommentLikeToDB = async (numberOfCommentLikes = 300) => {
  // Get userIds from db
  const [userIds] = await db.query('SELECT userID from Users');
  // Get postIds from db
  const [postIds] = await db.query('SELECT postID from UserPost');
  for (let i = 0; i < numberOfCommentLikes; i += 1) {
    const postLike = fakeData.randomPostLike(
      userIds[getRandomNumber(0, userIds.length - 1)].userID,
      postIds[getRandomNumber(0, postIds.length - 1)].postID,
    );
    try {
      await db.query(sqlQuery.insertPostLike(postLike));
    } catch (err) {
      if (err) throw err;
    }
  }
  log(
    success(
      `✅ Added ${numberOfCommentLikes} comment likes to the CommentLike Table`,
    ),
  );
};

const insertRandomPostLikeToDB = async (numberOfPostLikes = 300) => {
  // Get userIds from db
  const [userIds] = await db.query('SELECT userID from Users');
  // Get postIds from db
  const [postIds] = await db.query('SELECT postID from UserPost');
  // Get post comment id's from db
  const [postCommentIds] = await db.query(
    'SELECT postCommentID from PostComment',
  );

  for (let i = 0; i < 200; i += 1) {
    // Get userIds from db
    const [userIds] = await db.query('SELECT userID from Users');
    // Get post comment id's from db
    const [postCommentIds] = await db.query(
      'SELECT postCommentID from PostComment',
    );
    const commentLike = fakeData.randomCommentLike(
      userIds[getRandomNumber(0, userIds.length - 1)].userID,
      postCommentIds[getRandomNumber(0, postCommentIds.length - 1)]
        .postCommentID,
    );
    try {
      await db.query(sqlQuery.insertCommentLike(commentLike));
    } catch (err) {
      if (err) throw err;
    }
  }
  log(
    success(`✅ Added ${numberOfPostLikes} post likes to the PostLike Table`),
  );
};

const insertRandomFriendshipsToDB = async (friendsPerUser = 5) => {
  //
  //batch insert array
  let friendShipDataArrayContainer = [];

  // Get userIds from db
  const [userIds] = await db.query('SELECT userID from Users');

  userIds.forEach(async (userId) => {
    // destructure userID so that comparisons are [string <> string] not [string <> obj]
    const { userID: userIdOne } = userId;

    // holds existing friendships to prevent duplicate entries
    let alreadyFriends = [];

    // create random friendships *no repeat friendships*
    for (let i = 0; i < friendsPerUser; i += 1) {
      let userIdTwo = getRandomUserID(userIds);

      // get new userIdTwo if same as userId or if friendship already exists
      while (userIdOne === userIdTwo || alreadyFriends.includes(userIdTwo)) {
        userIdTwo = getRandomUserID(userIds);
      }

      // store id for future id validations
      alreadyFriends.push(userIdTwo);

      const friendShipObject = fakeData.randomFriendship(userIdOne, userIdTwo);

      const friendShipDataArray =
        sqlQuery.getFriendshipDataArray(friendShipObject);

      friendShipDataArrayContainer.push(friendShipDataArray);
    }
    // reset alreadyFriends array for next user iteration
    alreadyFriends.length = 0;
  });

  // batch insert all friendships into friendship table
  const sql = `INSERT INTO friends (userIdOne,userIdTwo,friendshipStatus,createdDateTime)VALUES ?`;
  try {
    // mysql2 batch inserting requires a special array format thus the double array paramater
    await db.query(sql, [friendShipDataArrayContainer], true);
  } catch (err) {
    if (err) throw err;
  }

  const totalFriends = userIds.length * friendsPerUser;
  log(success(`✅ Added ${totalFriends} friendships to Friends Table`));
};

export {
  insertRandomUserToDB,
  insertRandomPostToDB,
  insertRandomCommentToDB,
  insertRandomCommentLikeToDB,
  insertRandomPostLikeToDB,
  insertRandomFriendshipsToDB,
};
