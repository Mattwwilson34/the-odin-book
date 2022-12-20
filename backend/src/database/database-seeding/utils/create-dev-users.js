import { faker } from '@faker-js/faker';
import getRandomNumber from './random-number.js';
import * as sqlQuery from './sql-queries.js';
import moment from 'moment';
import db from '../../database-connection.js';
import bcrypt from 'bcrypt';

const devUser = {
  id: faker.datatype.uuid(),
  profilePicture: `http://localhost:8080/avatar-${getRandomNumber(1, 20)}.svg`,
  firstName: 'Matt',
  lastName: 'Wilson',
  username: 'username',
  password: 'a',
  email: 'a@a',
  birthdate: moment(faker.date.birthdate()).format('YYYY-MM-DD'),
  city: faker.address.city(),
  state: faker.address.state(),
  bio: faker.random.words(20),
  jobTitle: faker.name.jobTitle(),
  registeredAt: moment(faker.date.past()).format('YYYY-MM-DD HH:mm:ss'),
};

const hash1 = await bcrypt.hash(devUser.password, 10);
devUser.password = hash1;

const devGoogleUser = {
  id: '116719161182905024316',
  profilePicture:
    'https://lh3.googleusercontent.com/a/AEdFTp4VE-2MhTCVIH5-kVZNziFheGMeDwJPpVG1X_WLpg=s96-c',
  firstName: 'Matt',
  lastName: 'Wilson',
  username: 'mattwwilson34@gmail.com',
  password: 'pFaxlTRy8wdnuk3',
  email: 'mattwwilson34@gmail.com',
  birthdate: moment(faker.date.birthdate()).format('YYYY-MM-DD'),
  city: faker.address.city(),
  state: faker.address.state(),
  bio: faker.random.words(20),
  jobTitle: faker.name.jobTitle(),
  registeredAt: moment(faker.date.past()).format('YYYY-MM-DD HH:mm:ss'),
};

const hash2 = await bcrypt.hash(devGoogleUser.password, 10);
devGoogleUser.password = hash2;

const insertDevelopmentUsersToDB = async () => {
  await db.query('USE the_odin_book');
  await db.query(sqlQuery.insertUser(devUser));
  await db.query(sqlQuery.insertUser(devGoogleUser));
};

export default insertDevelopmentUsersToDB;
