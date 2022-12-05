import axios from 'axios';

const addCommentData = async (commentObject) => {
  const commentURL = 'http://localhost:8080/api/comment';

  const { user: userID, postID, commentText: commentBody } = commentObject;

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

export default addCommentData;
