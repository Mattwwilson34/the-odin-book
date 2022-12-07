import axios from 'axios';

const getPosts = async () => {
  const postURL = 'http://localhost:8080/api/posts';
  return axios.get(postURL);
};

export default getPosts;
