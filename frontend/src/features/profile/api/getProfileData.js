import axios from 'axios';

const getProfileData = (userID) => {
  const URL = `http://localhost:8080/api/profile/${userID}`;
  return axios.get(URL);
};

export default getProfileData;
