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

const randomPost = (userId) => {
  return {
    id: faker.datatype.uuid(),
    userId: userId,
    postText: faker.random.words(getRandomNumber(15, 30)),
    createdAt: moment(faker.date.past()).format('YYYY-MM-DD HH:mm:ss'),
  };
};

const randomPostLike = (userId, postId) => {
  return {
    id: faker.datatype.uuid(),
    postId: postId,
    userId: userId,
    createdAt: moment(faker.date.past()).format('YYYY-MM-DD HH:mm:ss'),
  };
};

const randomComment = (userId, postId) => {
  return {
    id: faker.datatype.uuid(),
    postId: postId,
    userId: userId,
    commentText: faker.random.words(getRandomNumber(2, 15)),
    createdAt: moment(faker.date.past()).format('YYYY-MM-DD HH:mm:ss'),
  };
};

const randomCommentLike = (userId, postCommentId) => {
  return {
    id: faker.datatype.uuid(),
    postCommentId: postCommentId,
    userId: userId,
    createdAt: moment(faker.date.past()).format('YYYY-MM-DD HH:mm:ss'),
  };
};

export {
  randomUser,
  randomPost,
  randomPostLike,
  randomComment,
  randomCommentLike,
};
