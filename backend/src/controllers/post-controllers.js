import db from '../database/database-connection.js';
import {
  randomPost,
  randomPostLike,
} from '../database/database-seeding/utils/fake-data-generators.js';
import {
  insertPost,
  insertPostLike,
} from '../database/database-seeding/utils/sql-queries.js';

const getPostsController = async (req, res) => {
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
        `SELECT userID, firstName, lastName, profilePicture FROM Users WHERE userID = ?`,
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
};

const postPostsController = async (req, res) => {
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
};

const postPostLikeController = async (req, res) => {
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
};

export { getPostsController, postPostsController, postPostLikeController };
