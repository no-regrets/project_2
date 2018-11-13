-- Drops the noRegretsDB if it exists currently --
DROP DATABASE IF EXISTS noRegretsDB;
-- Creates the "noRegretsDB" database --
CREATE DATABASE noRegretsDB;

-- ALL THE BELOW will ultimately be replaced with Sequelized Models --
CREATE TABLE users
(
	id int NOT NULL AUTO_INCREMENT,
	user_name varchar(255) NOT NULL,
	sex varchar(255) NOT NULL,
    weight INT NOT NULL,
    height INT NOT NULL,
    email varchar(255) NOT NULL,
    password varchar(255) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE sessions
(
	id int NOT NULL AUTO_INCREMENT,
	created_At INT NOT NULL,
    ended_At INT NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE sessionDrinks
(
    id int NOT NULL AUTO_INCREMENT,
	PRIMARY KEY (id)
);

CREATE TABLE drinks
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	amount INT NOT NULL,
	PRIMARY KEY (id)
);