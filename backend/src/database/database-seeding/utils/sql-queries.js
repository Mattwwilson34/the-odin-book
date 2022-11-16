import * as dotenv from 'dotenv';

dotenv.config({
  path: '/Users/matthewwilson/Desktop/Coding/the-odin-project/the-odin-book/backend/.env',
});

const dropDB = `DROP DATABASE IF EXISTS ${process.env.DB_DATABASE}`;

const createDB = `CREATE SCHEMA IF NOT EXISTS ${process.env.DB_DATABASE} DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;`;

const useDB = `USE ${process.env.DB_DATABASE}`;

const createTableUsers = `CREATE TABLE IF NOT EXISTS ${process.env.DB_DATABASE}.users (
  user_id VARCHAR(36) NOT NULL,
  profile_picture VARCHAR(200) NOT NULL,
  first_name VARCHAR(20) NOT NULL,
  last_name VARCHAR(20) NOT NULL,
  username VARCHAR(20) NOT NULL,
  password VARCHAR(20) NOT NULL,
  email VARCHAR(40) NOT NULL,
  birthdate DATE NOT NULL,
  created_date DATETIME NOT NULL,
  PRIMARY KEY (user_id))
  ENGINE = InnoDB
  AUTO_INCREMENT = 11
  DEFAULT CHARACTER SET = utf8mb4
  COLLATE = utf8mb4_0900_ai_ci;`;

const createTableUserPost = `CREATE TABLE IF NOT EXISTS ${process.env.DB_DATABASE}.user_post (
  post_id VARCHAR(36) NOT NULL,
  user_id VARCHAR(36) NOT NULL,
  post_text NVARCHAR(5000) NOT NULL,
  create_datetime DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (post_id),
  INDEX fk_user_post_users1_idx (user_id ASC) VISIBLE,
  CONSTRAINT fk_user_post_users1
  FOREIGN KEY (user_id)
  REFERENCES the_odin_book.users (user_id))
  ENGINE = InnoDB
  DEFAULT CHARACTER SET = utf8mb4
  COLLATE = utf8mb4_0900_ai_ci;`;

const createTablePostComment = `CREATE TABLE IF NOT EXISTS ${process.env.DB_DATABASE}.post_comment (
  post_comment_id VARCHAR(36) NOT NULL,
  post_id VARCHAR(36) NOT NULL,
  user_id VARCHAR(36) NOT NULL,
  comment_text NVARCHAR(5000) NOT NULL,
  created_datetime DATETIME NOT NULL,
  PRIMARY KEY (post_comment_id),
  INDEX fk_post_comment_users1_idx (user_id ASC) VISIBLE,
  INDEX fk_post_comment_user_post1_idx (post_id ASC) VISIBLE,
  CONSTRAINT fk_post_comment_user_post1
  FOREIGN KEY (post_id)
  REFERENCES the_odin_book.user_post (post_id),
  CONSTRAINT fk_post_comment_users1
  FOREIGN KEY (user_id)
  REFERENCES the_odin_book.users (user_id))
  ENGINE = InnoDB
  DEFAULT CHARACTER SET = utf8mb4
  COLLATE = utf8mb4_0900_ai_ci;`;

const createTableCommentLike = `CREATE TABLE IF NOT EXISTS ${process.env.DB_DATABASE}.comment_like (
  comment_like_id VARCHAR(36) NOT NULL,
  post_comment_id VARCHAR(36) NOT NULL,
  user_id VARCHAR(36) NOT NULL,
  created_datetime DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (comment_like_id),
  INDEX fk_comment_like_users1_idx (user_id ASC) VISIBLE,
  INDEX fk_comment_like_post_comment1_idx (post_comment_id ASC) VISIBLE,
  CONSTRAINT fk_comment_like_post_comment1
  FOREIGN KEY (post_comment_id)
  REFERENCES the_odin_book.post_comment (post_comment_id),
  CONSTRAINT fk_comment_like_users1
  FOREIGN KEY (user_id)
  REFERENCES the_odin_book.users (user_id))
  ENGINE = InnoDB
  DEFAULT CHARACTER SET = utf8mb4
  COLLATE = utf8mb4_0900_ai_ci;`;

const createTableFriends = `CREATE TABLE IF NOT EXISTS ${process.env.DB_DATABASE}.friends (
  profile_request VARCHAR(36) NULL DEFAULT NULL,
  profile_accept VARCHAR(36) NULL DEFAULT NULL,
  INDEX fk_friends_users_idx (profile_request ASC) VISIBLE,
  INDEX fk_friends_users1_idx (profile_accept ASC) VISIBLE,
  CONSTRAINT fk_friends_users
  FOREIGN KEY (profile_request)
  REFERENCES the_odin_book.users (user_id),
  CONSTRAINT fk_friends_users1
  FOREIGN KEY (profile_accept)
  REFERENCES the_odin_book.users (user_id))
  ENGINE = InnoDB
  DEFAULT CHARACTER SET = utf8mb4
  COLLATE = utf8mb4_0900_ai_ci;`;

const createTablePostLike = `CREATE TABLE IF NOT EXISTS ${process.env.DB_DATABASE}.post_like (
  post_like_id VARCHAR(36) NOT NULL,
  post_id VARCHAR(36) NOT NULL,
  user_id VARCHAR(36) NOT NULL,
  created_datetime DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (post_like_id),
  INDEX fk_post_like_users1_idx (user_id ASC) VISIBLE,
  INDEX fk_post_like_user_post1_idx (post_id ASC) VISIBLE,
  CONSTRAINT fk_post_like_user_post1
  FOREIGN KEY (post_id)
  REFERENCES the_odin_book.user_post (post_id),
  CONSTRAINT fk_post_like_users1
  FOREIGN KEY (user_id)
  REFERENCES the_odin_book.users (user_id))
  ENGINE = InnoDB
  DEFAULT CHARACTER SET = utf8mb4
  COLLATE = utf8mb4_0900_ai_ci;`;

const insertUser = (userDataObj) => {
  const userDataArray = Object.values(userDataObj);
  const userDataQuoteWrapped = userDataArray.map((data) => `"${data}"`);
  const userData = userDataQuoteWrapped.join(',');
  return `INSERT INTO users (user_id,profile_picture,first_name,last_name,username,password,email,birthdate,created_date)VALUES(${userData});`;
};

const insertPost = (userDataObj) => {
  const userDataArray = Object.values(userDataObj);
  const userDataQuoteWrapped = userDataArray.map((data) => `"${data}"`);
  const userData = userDataQuoteWrapped.join(',');
  return `INSERT INTO user_post (post_id,user_id,post_text,create_datetime)VALUES(${userData});`;
};

const insertComment = (userDataObj) => {
  const userDataArray = Object.values(userDataObj);
  const userDataQuoteWrapped = userDataArray.map((data) => `"${data}"`);
  const userData = userDataQuoteWrapped.join(',');
  return `INSERT INTO post_comment (post_comment_id,post_id,user_id,comment_text,created_datetime)VALUES(${userData});`;
};

const insertPostLike = (userDataObj) => {
  const userDataArray = Object.values(userDataObj);
  const userDataQuoteWrapped = userDataArray.map((data) => `"${data}"`);
  const userData = userDataQuoteWrapped.join(',');
  return `INSERT INTO post_like (post_like_id,post_id,user_id,created_datetime)VALUES(${userData});`;
};

const insertCommentLike = (userDataObj) => {
  const userDataArray = Object.values(userDataObj);
  const userDataQuoteWrapped = userDataArray.map((data) => `"${data}"`);
  const userData = userDataQuoteWrapped.join(',');
  return `INSERT INTO comment_like (comment_like_id,post_comment_id,user_id,created_datetime)VALUES(${userData});`;
};

export {
  dropDB,
  createDB,
  useDB,
  createTableUsers,
  createTableUserPost,
  createTablePostComment,
  createTableCommentLike,
  createTableFriends,
  createTablePostLike,
  insertUser,
  insertPost,
  insertComment,
  insertPostLike,
  insertCommentLike,
};
