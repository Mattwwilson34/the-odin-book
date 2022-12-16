import getRandomIntInclusive from '../random-number.js';

export const getRandomUserID = (userIDsArray) => {
  return userIDsArray[getRandomIntInclusive(0, userIDsArray.length - 1)].userID;
};
