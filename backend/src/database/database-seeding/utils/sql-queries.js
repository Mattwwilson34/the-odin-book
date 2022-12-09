import getQuoteWrappedStringFromObj from './quote-wrapped-string-from-object.js';

const insertUser = (userDataObj) => {
  const userData = getQuoteWrappedStringFromObj(userDataObj);
  return `INSERT INTO users (userID,profilePicture,firstName,lastName,username,password,email,birthdate,createdDateTime)VALUES(${userData});`;
};

const insertPost = (postDataObj) => {
  const userData = getQuoteWrappedStringFromObj(postDataObj);
  return `INSERT INTO UserPost (postID,userID,postText,createdDateTime)VALUES(${userData});`;
};

const insertComment = (commentDataObj) => {
  const userData = getQuoteWrappedStringFromObj(commentDataObj);
  return `INSERT INTO PostComment (postCommentID,postID,userID,commentText,createdDateTime)VALUES(${userData});`;
};

const insertPostLike = (postLikeDataObj) => {
  const userData = getQuoteWrappedStringFromObj(postLikeDataObj);
  return `INSERT INTO PostLike (postLikeID,postID,userID,createdDateTime)VALUES(${userData});`;
};

const insertCommentLike = (commentLikeDataObj) => {
  const userData = getQuoteWrappedStringFromObj(commentLikeDataObj);
  return `INSERT INTO CommentLike (commentLikeID,postCommentID,userID,createdDateTime)VALUES(${userData});`;
};

const insertFriendship = (object) => Object.values(object);

export {
  insertUser,
  insertPost,
  insertComment,
  insertPostLike,
  insertCommentLike,
  insertFriendship,
};
