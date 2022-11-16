import { faker } from '@faker-js/faker';
import moment from 'moment';

const randomCommentLike = (userId, postCommentId) => {
  return {
    id: faker.datatype.uuid(),
    postCommentId: postCommentId,
    userId: userId,
    createdAt: moment(faker.date.past()).format('YYYY-MM-DD HH:mm:ss'),
  };
};

export default randomCommentLike;
