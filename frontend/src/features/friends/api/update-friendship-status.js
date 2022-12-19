import axios from 'axios';

const updateFriendshipStatus = (newFriendshipValue) => {
  const updateURL = 'http://localhost:8080/api/friends/update-friendship';
  return axios.put(updateURL, newFriendshipValue);
};

export default updateFriendshipStatus;
