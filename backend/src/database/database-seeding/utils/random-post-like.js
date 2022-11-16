import { faker } from '@faker-js/faker';
import moment from 'moment';

const randomPostLike = (userId, postId) => {
  return {
    id: faker.datatype.uuid(),
    postId: postId,
    userId: userId,
    createdAt: moment(faker.date.past()).format('YYYY-MM-DD HH:mm:ss'),
  };
};

export default randomPostLike;
