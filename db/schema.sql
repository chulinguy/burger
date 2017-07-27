DROP DATABASE if exists burgers_db;
CREATE DATABASE burgers_db; 
USE burgers_db; 

CREATE TABLE burgers (
  id INT auto_increment primary key,
  burger_name VARCHAR(255) not null,
  devoured BOOLEAN DEFAULT false,
  date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);