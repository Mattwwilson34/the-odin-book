import axios from 'axios';

const postSignupData = (signupDataObject) => {
  const URL = `http://localhost:8080/api/signup`;

  return axios.post(URL, signupDataObject);
};

export default postSignupData;
