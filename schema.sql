-- Drops the blogger if it exists currently --
DROP DATABASE IF EXISTS project2_db;
-- Creates the "blogger" database --
CREATE DATABASE project2_db;

-- USE project2_db;

-- CREATE TABLE photos (
-- photo_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
-- user_id INT(50) NOT NULL,
-- marker_id INT(50) NOT NULL,
-- photo_url VARCHAR (500) NULL,
-- city VARCHAR(50) NOT NULL,
-- date DATE NULL,
-- time TIME NULL
-- );

-- CREATE TABLE users (
-- user_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
-- user_name VARCHAR(50) NOT NULL,
-- user_fname VARCHAR (50) NULL,
-- user_lname VARCHAR (50) NULL,
-- bio VARCHAR(500) NULL
-- );

-- CREATE TABLE markers (
--   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
--   name VARCHAR( 60 ) NOT NULL ,
--   address VARCHAR( 80 ) NOT NULL ,
--   lat FLOAT( 10, 6 ) NOT NULL ,
--   lng FLOAT( 10, 6 ) NOT NULL ,
--   type VARCHAR( 30 ) NOT NULL
-- );