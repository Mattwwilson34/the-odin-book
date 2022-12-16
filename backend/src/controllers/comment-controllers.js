import db from '../database/database-connection.js';
import {
  randomComment,
  randomCommentLike,
} from '../database/database-seeding/utils/fake-data-generators.js';
import {
  insertComment,
  insertCommentLike,
} from '../database/database-seeding/utils/sql-queries.js';

const postCommentController = async (req, res) => {
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
};

const postCommentLikeController = async (req, res) => {
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
};

export { postCommentController, postCommentLikeController };
