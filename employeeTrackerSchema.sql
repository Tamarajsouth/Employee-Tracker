-- table for employee *******
DROP DATABASE IF EXISTS employee_tracker_DB;
CREATE DATABASE employee_tracker_DB;
USE employee_tracker_DB;

CREATE TABLE employees(
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT default 0,
  manager_id INT default 0,
  PRIMARY KEY (id)
);

-- table for role

CREATE TABLE role(
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL (6, 3) NULL,
  department_id INT default 0,
  PRIMARY KEY (id)
);

-- table for departments

CREATE TABLE department(
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);


INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Fred", "Flinstone", 1, 001), ("Big", "Bird", 2, 20), ("Strawberry", "Shortcake", 3, 990);

INSERT INTO role (title, salary, department_id)
VALUES ("Operations Manager", 103.325, 22), ("Director of Marketing", 87.990, 33), ("Office Administrator", 77.975, 00);

INSERT INTO department (name)
VALUES ("Production"), ("Marketing"), ("Accounting");