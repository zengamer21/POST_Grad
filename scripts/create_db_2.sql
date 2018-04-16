-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema post_grad
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema post_grad
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `post_grad` DEFAULT CHARACTER SET utf8 ;
USE `post_grad` ;

-- -----------------------------------------------------
-- Table `post_grad`.`persons`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `post_grad`.`persons` (
  `id` INT NOT NULL,
  `charger_id` VARCHAR(45) NULL,
  `first_name` VARCHAR(45) NULL,
  `middle_name` VARCHAR(45) NULL,
  `last_name` VARCHAR(45) NULL,
  `pos_approved` TINYINT NULL,
  `pos_completed` TINYINT NULL,
  `role` VARCHAR(45) NULL,
  `address_street` VARCHAR(100) NULL,
  `address_city` VARCHAR(100) NULL,
  `address_state` VARCHAR(100) NULL,
  `address_zip` VARCHAR(5) NULL,
  `advisor_id` INT NULL,
  `phone` VARCHAR(45) NULL,
  `email` VARCHAR(100) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `post_grad`.`courses`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `post_grad`.`courses` (
  `id` INT NOT NULL,
  `crn` VARCHAR(10) NULL,
  `course_num` VARCHAR(10) NULL,
  `title` VARCHAR(35) NULL,
  `credit` DOUBLE NULL,
  `semester` VARCHAR(45) NULL,
  `instructor` VARCHAR(100) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `post_grad`.`StudentsCourses`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `post_grad`.`StudentsCourses` (
  `id` INT NOT NULL,
  `grade` VARCHAR(2) NULL,
  `persons_id` INT NOT NULL,
  `courses_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_StudentsCourses_persons1_idx` (`persons_id` ASC),
  INDEX `fk_StudentsCourses_courses1_idx` (`courses_id` ASC),
  CONSTRAINT `fk_StudentsCourses_persons1`
    FOREIGN KEY (`persons_id`)
    REFERENCES `post_grad`.`persons` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_StudentsCourses_courses1`
    FOREIGN KEY (`courses_id`)
    REFERENCES `post_grad`.`courses` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
