import { faker } from '@faker-js/faker';
import moment from 'moment';
import getRandomIntInclusive from '../utils/random-number.js';
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
    city: faker.address.city(),
    state: faker.address.state(),
    bio: faker.random.words(20),
    jobTitle: faker.name.jobTitle(),
    registeredAt: moment(faker.date.past()).format('YYYY-MM-DD HH:mm:ss'),
  };
};

const randomPhoto = (userID) => {
  const fakePhotoCatagories = [
    'abstract',
    'animals',
    'avatar',
    'business',
    'cats',
    'city',
    'dataUri',
    'fashion',
    'food',
    'image',
    'imageUrl',
    'nature',
    'nightlife',
    'people',
    'sports',
    'technics',
    'transport',
  ];
  return {
    photoID: faker.datatype.uuid(),
    userID,
    photoURL:
      faker.image[
        fakePhotoCatagories[getRandomNumber(0, fakePhotoCatagories.length - 1)]
      ](),
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
    friendshipStatus: String(getRandomIntInclusive(0, 2)),
    createdAt: createdAt,
  };
};

export {
  randomUser,
  randomPhoto,
  randomPost,
  randomPostLike,
  randomComment,
  randomCommentLike,
  randomFriendship,
};
