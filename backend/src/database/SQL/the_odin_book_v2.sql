-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema the_odin_book
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema the_odin_book
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `the_odin_book` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `the_odin_book` ;

-- -----------------------------------------------------
-- Table `the_odin_book`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `the_odin_book`.`users` (
  `user_id` VARCHAR(36) NOT NULL,
  `profile_picture` VARCHAR(200) NOT NULL,
  `first_name` VARCHAR(20) NOT NULL,
  `last_name` VARCHAR(20) NOT NULL,
  `username` VARCHAR(20) NOT NULL,
  `password` VARCHAR(20) NOT NULL,
  `email` VARCHAR(40) NOT NULL,
  `birthdate` DATE NOT NULL,
  `created_date` DATETIME NOT NULL,
  PRIMARY KEY (`user_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 11
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `the_odin_book`.`user_post`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `the_odin_book`.`user_post` (
  `post_id` VARCHAR(36) NOT NULL,
  `user_id` VARCHAR(36) NOT NULL,
  `post_text` BLOB NOT NULL,
  `create_datetime` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`post_id`),
  INDEX `fk_user_post_users1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_post_users1`
    FOREIGN KEY (`user_id`)
    REFERENCES `the_odin_book`.`users` (`user_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `the_odin_book`.`post_comment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `the_odin_book`.`post_comment` (
  `post_comment_id` VARCHAR(36) NOT NULL,
  `post_id` VARCHAR(36) NOT NULL,
  `user_id` VARCHAR(36) NOT NULL,
  `comment_text` BLOB NOT NULL,
  `created_datetime` DATETIME NOT NULL,
  PRIMARY KEY (`post_comment_id`),
  INDEX `fk_post_comment_users1_idx` (`user_id` ASC) VISIBLE,
  INDEX `fk_post_comment_user_post1_idx` (`post_id` ASC) VISIBLE,
  CONSTRAINT `fk_post_comment_user_post1`
    FOREIGN KEY (`post_id`)
    REFERENCES `the_odin_book`.`user_post` (`post_id`),
  CONSTRAINT `fk_post_comment_users1`
    FOREIGN KEY (`user_id`)
    REFERENCES `the_odin_book`.`users` (`user_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `the_odin_book`.`comment_like`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `the_odin_book`.`comment_like` (
  `comment_like_id` VARCHAR(36) NOT NULL,
  `post_comment_id` VARCHAR(36) NOT NULL,
  `user_id` VARCHAR(36) NOT NULL,
  `created_datetime` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`comment_like_id`),
  INDEX `fk_comment_like_users1_idx` (`user_id` ASC) VISIBLE,
  INDEX `fk_comment_like_post_comment1_idx` (`post_comment_id` ASC) VISIBLE,
  CONSTRAINT `fk_comment_like_post_comment1`
    FOREIGN KEY (`post_comment_id`)
    REFERENCES `the_odin_book`.`post_comment` (`post_comment_id`),
  CONSTRAINT `fk_comment_like_users1`
    FOREIGN KEY (`user_id`)
    REFERENCES `the_odin_book`.`users` (`user_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `the_odin_book`.`friends`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `the_odin_book`.`friends` (
  `profile_request` VARCHAR(36) NULL DEFAULT NULL,
  `profile_accept` VARCHAR(36) NULL DEFAULT NULL,
  INDEX `fk_friends_users_idx` (`profile_request` ASC) VISIBLE,
  INDEX `fk_friends_users1_idx` (`profile_accept` ASC) VISIBLE,
  CONSTRAINT `fk_friends_users`
    FOREIGN KEY (`profile_request`)
    REFERENCES `the_odin_book`.`users` (`user_id`),
  CONSTRAINT `fk_friends_users1`
    FOREIGN KEY (`profile_accept`)
    REFERENCES `the_odin_book`.`users` (`user_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `the_odin_book`.`post_like`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `the_odin_book`.`post_like` (
  `post_like_id` VARCHAR(36) NOT NULL,
  `post_id` VARCHAR(36) NOT NULL,
  `user_id` VARCHAR(36) NOT NULL,
  `created_datetime` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`post_like_id`),
  INDEX `fk_post_like_users1_idx` (`user_id` ASC) VISIBLE,
  INDEX `fk_post_like_user_post1_idx` (`post_id` ASC) VISIBLE,
  CONSTRAINT `fk_post_like_user_post1`
    FOREIGN KEY (`post_id`)
    REFERENCES `the_odin_book`.`user_post` (`post_id`),
  CONSTRAINT `fk_post_like_users1`
    FOREIGN KEY (`user_id`)
    REFERENCES `the_odin_book`.`users` (`user_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
