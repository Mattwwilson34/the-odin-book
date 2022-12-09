import express from 'express';
import db from '../database/database-connection.js';
import {
  randomPost,
  randomComment,
  randomPostLike,
  randomCommentLike,
} from '../database/database-seeding/utils/fake-data-generators.js';
import {
  insertPost,
  insertComment,
  insertPostLike,
  insertCommentLike,
} from '../database/database-seeding/utils/sql-queries.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('<h1>You hit the API route</h1>');
});

router.get('/posts', async (req, res) => {
  let combinedData = [];

  const postFields = [
    'userPost.*',
    'Users.firstName',
    'Users.lastName',
    'Users.profilePicture',
  ];

  const [posts] = await db.execute(
    `SELECT ${postFields} FROM userPost INNER JOIN Users ON userPost.userID=Users.userID ORDER BY userPost.createdDateTime DESC`,
  );

  for await (const post of posts) {
    //
    let postData = [];
    // Get post likes
    const postLikeFields = ['createdDateTime', 'userID'];
    const [postLikes] = await db.execute(
      `SELECT ${postLikeFields} FROM postLike WHERE postID = ?`,
      [post.postID],
    );

    let expandedPostLikeData = [];
    // Get user names for likes
    for await (const postLike of postLikes) {
      const [postLikesFull] = await db.execute(
        `SELECT firstName, lastName FROM Users WHERE userID = ?`,
        [postLike.userID],
      );
      expandedPostLikeData.push(...postLikesFull);
    }

    let commentData = [];
    // Get post comments
    const [comments] = await db.execute(
      `SELECT * FROM postComment WHERE postID = ? ORDER BY createdDateTime`,
      [post.postID],
    );

    // Get user data amd comment likes for each comment
    for await (const comment of comments) {
      //
      // Get user info
      const [commentUserData] = await db.execute(
        `SELECT firstName, lastName, profilePicture FROM Users WHERE userID = ?`,
        [comment.userID],
      );

      // Get post comment likes
      const [commentLikes] = await db.execute(
        `SELECT * FROM commentLike WHERE postCommentID = ?`,
        [comment.postCommentID],
      );
      commentData.push({ ...comment, commentUserData, commentLikes });
    }
    postData.push({ ...post, expandedPostLikeData, commentData });
    combinedData.push(...postData);
  }

  res.json(combinedData);
});

router.post('/posts', async (req, res) => {
  const post = req.body;
  const additionalPostData = randomPost(req.body.userID, true);
  const updatedPost = { ...additionalPostData, postText: post.postBody };

  try {
    await db.execute(insertPost(updatedPost));
    res.send({
      message: 'Post payload recieved and added to db',
      dataRecieved: updatedPost,
    });
  } catch (err) {
    if (err) throw err;
  }
});

router.post('/comment', async (req, res) => {
  //
  console.log(req.body);
  const { userID, postID, commentBody } = req.body;

  let comment = randomComment(userID, postID, true);

  comment = {
    ...comment,
    commentText: commentBody,
  };

  await db.execute(insertComment(comment));
  res.send({
    message: 'Comment Payload recieved and added to database.',
    dataSaved: comment,
  });
});

router.post('/postLike', async (req, res) => {
  const { postID, userID, liked } = req.body;
  console.log(req.body);

  let postLike = randomPostLike(userID, postID, true);

  if (liked) {
    await db.execute(insertPostLike(postLike));
    res.send({
      message: 'Post like Payload recieved and added to database.',
      dataSaved: postLike,
    });
  } else {
    await db.execute(
      `DELETE from postLike WHERE postID="${postID}" AND userID="${userID}"`,
    );
    res.send({
      message: 'Post like Payload recieved and deleted from database.',
      dataSaved: postLike,
    });
  }
});

router.post('/commentLike', async (req, res) => {
  const { postCommentID, userID, liked } = req.body;
  console.log(req.body);

  let commentLike = randomCommentLike(userID, postCommentID, true);

  if (liked) {
    await db.execute(insertCommentLike(commentLike));
    res.send({
      message: 'Comment like Payload recieved and added to database.',
      dataSaved: commentLike,
    });
  } else {
    await db.execute(
      `DELETE from commentLike WHERE postCommentID="${postCommentID}" AND userID="${userID}"`,
    );
    res.send({
      message: 'Comment like Payload recieved and deleted from database.',
      dataSaved: commentLike,
    });
  }
});

// Friends
router.get('/friends/:userID', async (req, res) => {
  const userID = req.params.userID;
  const [friends] = await db.execute(
    `SELECT * FROM the_odin_book.Friends WHERE userIdOne= ?`,
    [userID],
  );

  const friendIDs = [];
  friends.forEach((friend) => {
    friendIDs.push(`"${friend.userIdTwo}"`);
  });

  console.log(friendIDs);

  const [friendData] = await db.execute(
    `SELECT firstName, lastName, username, profilePicture FROM the_odin_book.Users WHERE userID IN (${friendIDs})`,
export default router;
