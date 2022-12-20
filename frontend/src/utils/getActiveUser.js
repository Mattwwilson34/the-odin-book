import axios from 'axios';

const getActiveUser = () => axios.get('http://localhost:8080/api/active-user');

export default getActiveUser;
