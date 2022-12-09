import axios from 'axios';

const getFriends = async (userID) => {
  const friendsURL = `http://localhost:8080/api/friends/${userID}`;
  return axios.get(friendsURL);
};

export default getFriends;
