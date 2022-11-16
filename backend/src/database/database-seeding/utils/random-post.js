import { faker } from '@faker-js/faker';
import moment from 'moment';
import getRandomNumber from './random-number.js';

const randomPost = (userId) => {
  return {
    id: faker.datatype.uuid(),
    userId: userId,
    postText: faker.random.words(getRandomNumber(15, 30)),
    createdAt: moment(faker.date.past()).format('YYYY-MM-DD HH:mm:ss'),
  };
};

export default randomPost;
