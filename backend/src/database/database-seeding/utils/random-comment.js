import { faker } from '@faker-js/faker';
import moment from 'moment';
import getRandomNumber from './random-number.js';

const randomComment = (userId, postId) => {
  return {
    id: faker.datatype.uuid(),
    postId: postId,
    userId: userId,
    commentText: faker.random.words(getRandomNumber(2, 15)),
    createdAt: moment(faker.date.past()).format('YYYY-MM-DD HH:mm:ss'),
  };
};

console.log(randomComment('1209salkdf', '123908sdfkjh'));

export default randomComment;
