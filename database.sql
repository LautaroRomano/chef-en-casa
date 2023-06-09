-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema funnyfood
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema funnyfood
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `funnyfood` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `funnyfood` ;

-- -----------------------------------------------------
-- Table `funnyfood`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `funnyfood`.`users` (
  `id_user` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id_user`),
  UNIQUE INDEX `username` (`username` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `funnyfood`.`recipes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `funnyfood`.`recipes` (
  `id_recipe` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `recipe_name` VARCHAR(255) NOT NULL,
  `recipe_detail` TEXT NOT NULL,
  `id_user` INT UNSIGNED NULL DEFAULT NULL,
  PRIMARY KEY (`id_recipe`),
  INDEX `id_user` (`id_user` ASC) VISIBLE,
  CONSTRAINT `recipes_ibfk_1`
    FOREIGN KEY (`id_user`)
    REFERENCES `funnyfood`.`users` (`id_user`))
ENGINE = InnoDB
AUTO_INCREMENT = 10
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
