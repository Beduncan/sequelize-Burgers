CREATE DATABASE burgers_dbs;

USE burgers_dbs;

CREATE TABLE burgers (
	id integer(50) auto_increment primary key,
	burgers VARCHAR(20) NOT NULL,
	devoured BOOLEAN
);