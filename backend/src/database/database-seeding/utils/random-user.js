import { faker } from '@faker-js/faker';
import moment from 'moment';

const randomUser = () => ({
  id: faker.datatype.uuid(),
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  username: faker.internet.userName(),
  password: faker.internet.password(),
  email: faker.internet.email(),
  birthdate: moment(faker.date.birthdate()).format('YYYY-MM-DD'),
  registeredAt: moment(faker.date.past()).format('YYYY-MM-DD HH:mm:ss'),
});

export default randomUser;
