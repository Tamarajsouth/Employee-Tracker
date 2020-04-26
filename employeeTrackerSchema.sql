-- table for employee *******
DROP DATABASE IF EXISTS employees_DB;
CREATE DATABASE employees_DB;

USE employees_DB;

CREATE TABLE employees(
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT default 0,
  manager_id INT default 0,
  PRIMARY KEY (id)
);

-- table for role
DROP DATABASE IF EXISTS role_DB;
CREATE DATABASE role_DB;

USE role_DB;

CREATE TABLE role(
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(3, 4) NOT NULL,
  department_id INT default 0,
  PRIMARY KEY (id)
);

-- table for departments
DROP DATABASE IF EXISTS department_DB;
CREATE DATABASE department_DB;

USE department_DB;

CREATE TABLE department(
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);