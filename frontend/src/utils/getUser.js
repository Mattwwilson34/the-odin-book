import axios from 'axios';

const fetchUser = async () => {
  const serverURL = 'http://localhost:8080/auth/user';
  const axiosSettings = { withCredentials: true };

  return axios.get(serverURL, axiosSettings);
};

export default fetchUser;
