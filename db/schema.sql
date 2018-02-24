CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
	id integer(50) auto_increment primary key,
	burgers VARCHAR(20) NOT NULL,
	devoured BOOLEAN
);