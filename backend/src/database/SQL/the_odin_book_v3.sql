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
-- Table `the_odin_book`.`Users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `the_odin_book`.`Users` (
  `userID` VARCHAR(36) NOT NULL,
  `profilePicture` VARCHAR(200) NOT NULL,
  `firstName` VARCHAR(20) NOT NULL,
  `lastName` VARCHAR(20) NOT NULL,
  `username` VARCHAR(50) NOT NULL,
  `password` VARCHAR(20) NOT NULL,
  `email` VARCHAR(40) NOT NULL,
  `birthdate` DATE NOT NULL,
  `createdDateTime` DATETIME NOT NULL,
  PRIMARY KEY (`userID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `the_odin_book`.`UserPost`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `the_odin_book`.`UserPost` (
  `postID` VARCHAR(36) NOT NULL,
  `userID` VARCHAR(36) NOT NULL,
  `postText` VARCHAR(5000) CHARACTER SET 'utf8mb3' NOT NULL,
  `createdDateTime` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`postID`),
  INDEX `fk_user_post_users1_idx` (`userID` ASC) VISIBLE,
  CONSTRAINT `fk_user_post_users1`
    FOREIGN KEY (`userID`)
    REFERENCES `the_odin_book`.`Users` (`userID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `the_odin_book`.`PostComment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `the_odin_book`.`PostComment` (
  `postCommentID` VARCHAR(36) NOT NULL,
  `postID` VARCHAR(36) NOT NULL,
  `userID` VARCHAR(36) NOT NULL,
  `commentText` VARCHAR(5000) CHARACTER SET 'utf8mb3' NOT NULL,
  `createdDateTime` DATETIME NOT NULL,
  PRIMARY KEY (`postCommentID`),
  INDEX `fk_post_comment_users1_idx` (`userID` ASC) VISIBLE,
  INDEX `fk_post_comment_user_post1_idx` (`postID` ASC) VISIBLE,
  CONSTRAINT `fk_post_comment_user_post1`
    FOREIGN KEY (`postID`)
    REFERENCES `the_odin_book`.`UserPost` (`postID`),
  CONSTRAINT `fk_post_comment_users1`
    FOREIGN KEY (`userID`)
    REFERENCES `the_odin_book`.`Users` (`userID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `the_odin_book`.`CommentLike`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `the_odin_book`.`CommentLike` (
  `commentLikeID` VARCHAR(36) NOT NULL,
  `postCommentID` VARCHAR(36) NOT NULL,
  `userID` VARCHAR(36) NOT NULL,
  `createdDateTime` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`commentLikeID`),
  INDEX `fk_comment_like_users1_idx` (`userID` ASC) VISIBLE,
  INDEX `fk_comment_like_post_comment1_idx` (`postCommentID` ASC) VISIBLE,
  CONSTRAINT `fk_comment_like_post_comment1`
    FOREIGN KEY (`postCommentID`)
    REFERENCES `the_odin_book`.`PostComment` (`postCommentID`),
  CONSTRAINT `fk_comment_like_users1`
    FOREIGN KEY (`userID`)
    REFERENCES `the_odin_book`.`Users` (`userID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `the_odin_book`.`Friends`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `the_odin_book`.`Friends` (
  `userIdOne` VARCHAR(36) NOT NULL,
  `userIdTwo` VARCHAR(36) NOT NULL,
  `friendshipStatus` ENUM('0', '1', '2') NULL DEFAULT '0',
  `createdDateTime` DATETIME NULL DEFAULT NULL,
  INDEX `fk_Friends_Users1_idx` (`userIdOne` ASC) VISIBLE,
  CONSTRAINT `fk_Friends_Users1`
    FOREIGN KEY (`userIdOne`)
    REFERENCES `the_odin_book`.`Users` (`userID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Friends_Users2`
    FOREIGN KEY (`userIdTwo`)
    REFERENCES `the_odin_book`.`Users` (`userID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `the_odin_book`.`PostLike`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `the_odin_book`.`PostLike` (
  `postLikeID` VARCHAR(36) NOT NULL,
  `postID` VARCHAR(36) NOT NULL,
  `userID` VARCHAR(36) NOT NULL,
  `createdDateTime` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`postLikeID`),
  INDEX `fk_post_like_users1_idx` (`userID` ASC) VISIBLE,
  INDEX `fk_post_like_user_post1_idx` (`postID` ASC) VISIBLE,
  CONSTRAINT `fk_post_like_user_post1`
    FOREIGN KEY (`postID`)
    REFERENCES `the_odin_book`.`UserPost` (`postID`),
  CONSTRAINT `fk_post_like_users1`
    FOREIGN KEY (`userID`)
    REFERENCES `the_odin_book`.`Users` (`userID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `the_odin_book`.`sessions`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `the_odin_book`.`sessions` (
  `session_id` VARCHAR(128) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_bin' NOT NULL,
  `expires` INT UNSIGNED NOT NULL,
  `data` MEDIUMTEXT CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_bin' NULL DEFAULT NULL,
  PRIMARY KEY (`session_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
