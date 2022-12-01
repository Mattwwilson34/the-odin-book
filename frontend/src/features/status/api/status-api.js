import axios from 'axios';

const submitStatus = async (userID, postBody) => {
  const postURL = 'http://localhost:8080/api/posts';

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

export default submitStatus;
