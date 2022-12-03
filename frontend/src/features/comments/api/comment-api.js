import axios from 'axios';

const submitCommentLike = async (postCommentID, userID, liked) => {
  const commentLikeURL = 'http://localhost:8080/api/commentLike';

  const commentLikeData = {
    postCommentID,
    userID,
    liked,
  };

  try {
    await axios.post(commentLikeURL, commentLikeData);
  } catch (err) {
    if (err) throw err;
  }
};

const submitComment = async (userID, postID, commentBody) => {
  const commentURL = 'http://localhost:8080/api/comment';

  const comment = {
    userID,
    postID,
    commentBody,
  };

  try {
    await axios.post(commentURL, comment);
  } catch (err) {
    if (err) throw err;
  }
};

export { submitCommentLike, submitComment };
