import axios from 'axios';

const checkIfLoggedIn = async () => {
  const serverURL = 'http://localhost:8080/auth/user';
  const axiosSettings = { withCredentials: true };

  return axios.get(serverURL, axiosSettings).catch((error) => {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
    } else if (error.request) {
      // The request was made but no response was received
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
  });
};

export default checkIfLoggedIn;
