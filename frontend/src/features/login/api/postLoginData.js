import axios from 'axios';

const postLoginData = async (loginData) => {
  const URL = `http://localhost:8080/auth/login`;

  return axios.post(URL, loginData);
};

export default postLoginData;
