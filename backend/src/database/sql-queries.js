const dropDB = `DROP DATABASE IF EXISTS the_odin_book`;

const createDB = `CREATE SCHEMA IF NOT EXISTS the_odin_book DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;`;

const useDB = 'USE the_odin_book';

const createTableUsers = `CREATE TABLE IF NOT EXISTS the_odin_book.users (
  user_id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(20) NOT NULL,
  last_name VARCHAR(20) NOT NULL,
  username VARCHAR(20) NOT NULL,
  password VARCHAR(20) NOT NULL,
  email VARCHAR(20) NOT NULL,
  birthdate DATE NOT NULL,
  created_date DATETIME NOT NULL,
  PRIMARY KEY (user_id))
  ENGINE = InnoDB
  DEFAULT CHARACTER SET = utf8mb4
  COLLATE = utf8mb4_0900_ai_ci;`;

const createTableUserPost = `CREATE TABLE IF NOT EXISTS the_odin_book.user_post (
  post_id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  post_text BLOB NOT NULL,
  create_datetime DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (post_id),
  INDEX fk_user_post_users1_idx (user_id ASC) VISIBLE,
  CONSTRAINT fk_user_post_users1
  FOREIGN KEY (user_id)
  REFERENCES the_odin_book.users (user_id))
  ENGINE = InnoDB
  DEFAULT CHARACTER SET = utf8mb4
  COLLATE = utf8mb4_0900_ai_ci;`;

const createTablePostComment = `CREATE TABLE IF NOT EXISTS the_odin_book.post_comment (
  post_comment_id INT NOT NULL AUTO_INCREMENT,
  post_id INT NOT NULL,
  user_id INT NOT NULL,
  comment_text BLOB NOT NULL,
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

const createTableCommentLike = `CREATE TABLE IF NOT EXISTS the_odin_book.comment_like (
  comment_like_id INT NOT NULL AUTO_INCREMENT,
  post_comment_id INT NOT NULL,
  user_id INT NOT NULL,
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

const createTableFriends = `CREATE TABLE IF NOT EXISTS the_odin_book.friends (
  profile_request INT NULL DEFAULT NULL,
  profile_accept INT NULL DEFAULT NULL,
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

const createTablePostLike = `CREATE TABLE IF NOT EXISTS the_odin_book.post_like (
  post_like_id INT NOT NULL AUTO_INCREMENT,
  post_id INT NOT NULL,
  user_id INT NOT NULL,
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
};
