import { faker } from '@faker-js/faker';
import moment from 'moment';
import getRandomNumber from '../utils/random-number.js';

const randomUser = (createdNow = false) => {
  let createdAt = moment(faker.date.past()).format('YYYY-MM-DD HH:mm:ss');
  if (createdNow) createdAt = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');

  return {
    id: faker.datatype.uuid(),
    profilePicture: `http://localhost:8080/avatar-${getRandomNumber(
      1,
      20,
    )}.svg`,
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    username: faker.internet.userName(),
    password: faker.internet.password(),
    email: faker.internet.email(),
    birthdate: moment(faker.date.birthdate()).format('YYYY-MM-DD'),
    registeredAt: moment(faker.date.past()).format('YYYY-MM-DD HH:mm:ss'),
  };
};

const randomPost = (userId, createdNow = false) => {
  let createdAt = moment(faker.date.past()).format('YYYY-MM-DD HH:mm:ss');
  if (createdNow) createdAt = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');

  return {
    id: faker.datatype.uuid(),
    userId: userId,
    postText: faker.random.words(getRandomNumber(15, 30)),
    createdAt: createdAt,
  };
};

const randomPostLike = (userId, postId, createdNow = false) => {
  let createdAt = moment(faker.date.past()).format('YYYY-MM-DD HH:mm:ss');
  if (createdNow) createdAt = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');

  return {
    id: faker.datatype.uuid(),
    postId: postId,
    userId: userId,
    createdAt: createdAt,
  };
};

const randomComment = (userId, postId, createdNow = false) => {
  let createdAt = moment(faker.date.past()).format('YYYY-MM-DD HH:mm:ss');
  if (createdNow) createdAt = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');

  return {
    id: faker.datatype.uuid(),
    postId: postId,
    userId: userId,
    commentText: faker.random.words(getRandomNumber(2, 15)),
    createdAt: createdAt,
  };
};

const randomCommentLike = (userId, postCommentId, createdNow = false) => {
  let createdAt = moment(faker.date.past()).format('YYYY-MM-DD HH:mm:ss');
  if (createdNow) createdAt = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');

  return {
    id: faker.datatype.uuid(),
    postCommentId: postCommentId,
    userId: userId,
    createdAt: createdAt,
  };
};

const randomFriendship = (userIdOne, userIdTwo, createdNow = false) => {
  let createdAt = moment(faker.date.past()).format('YYYY-MM-DD HH:mm:ss');
  if (createdNow) createdAt = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');

  return {
    userIdOne,
    userIdTwo,
    friendshipStatus: '1',
    createdAt: createdAt,
  };
};

export {
  randomUser,
  randomPost,
  randomPostLike,
  randomComment,
  randomCommentLike,
  randomFriendship,
};
