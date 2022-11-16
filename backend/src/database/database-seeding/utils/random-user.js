import { faker } from '@faker-js/faker';
import moment from 'moment';
import getRandomNumber from '../utils/random-number.js';

const randomUser = () => ({
  id: faker.datatype.uuid(),
  profilePicture: `http://localhost:8080/avatar-${getRandomNumber(1, 10)}.svg`,
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  username: faker.internet.userName(),
  password: faker.internet.password(),
  email: faker.internet.email(),
  birthdate: moment(faker.date.birthdate()).format('YYYY-MM-DD'),
  registeredAt: moment(faker.date.past()).format('YYYY-MM-DD HH:mm:ss'),
});

export default randomUser;
