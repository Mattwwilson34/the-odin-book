import axios from 'axios';

const addPost = async (postObject) => {
  const postURL = 'http://localhost:8080/api/posts';

  const { user: userID, textArea: postBody } = postObject;

  const post = {
    userID,
    postBody,
  };

  try {
    await axios.post(postURL, post);
  } catch (err) {
    if (err) throw err;
  }
};

export default addPost;
