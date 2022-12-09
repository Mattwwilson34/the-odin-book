import * as sqlQuery from './sql-queries.js';
import * as fakeData from './fake-data-generators.js';
import getRandomNumber from './random-number.js';
import db from '../../database-connection.js';
import { log, success } from '../../../utils/console-log.js';

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
  const friendshipDataArrayContainer = [];

  // Get userIds from db
  const [userIds] = await db.query('SELECT userID from Users');

  userIds.forEach(async (userId, index) => {
    // destructure userID so that comparisons are [string <> string] not [string <> obj]
    const { userID: userIdOne } = userId;

    // holds existing friendships to prevent duplicate entries
    let alreadyFriends = [];

    // create random friendships *no repeate friendships*
    for (let i = 0; i < friendsPerUser; i += 1) {
      let userIdTwo = userIds[getRandomNumber(0, userIds.length - 1)].userID;

      // get new userIdTwo if same as userId or if friendship already exists
      while (userIdTwo === userIdOne || alreadyFriends.includes(userIdTwo)) {
        userIdTwo = userIds[getRandomNumber(0, userIds.length - 1)].userID;
      }

      // userIdTwo passed validation add to alreadyFriends array to prevent duplicate
      alreadyFriends.push(userIdTwo);

      // get friendship object with all needed fields
      const friendShip = fakeData.randomFriendship(userIdOne, userIdTwo);

      // get array of friendship data fieldso
      const friendShipDataArray = sqlQuery.insertFriendship(friendShip);

      // add
      friendshipDataArrayContainer.push(friendShipDataArray);
    }
    // reset friends array for next user iteration
    alreadyFriends.length = 0;
  });

  // batch insert all friendships into friendship table
  const sql = `INSERT INTO friends (userIdOne,userIdTwo,friendshipStatus,createdDateTime)VALUES ?`;
  try {
    await db.query(sql, [friendshipDataArrayContainer], true);
  } catch (err) {
    if (err) throw err;
  }

  const totalFriends = userIds.length * friendsPerUser;
  log(success(`✅ Added ${totalFriends} friendships to Friends Table`));
};

// insertRandomFriendshipsToDB();

export {
  insertRandomUserToDB,
  insertRandomPostToDB,
  insertRandomCommentToDB,
  insertRandomCommentLikeToDB,
  insertRandomPostLikeToDB,
  insertRandomFriendshipsToDB,
};
