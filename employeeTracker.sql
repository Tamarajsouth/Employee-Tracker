DROP DATABASE IF EXISTS employee_tracker_DB;
CREATE DATABASE employee_tracker_DB;
USE employee_tracker_DB;

-- table for employeess

CREATE TABLE employees(
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT default 0,
  manager_id VARCHAR (30),
  PRIMARY KEY (id)
);

-- table for roles

CREATE TABLE roles(
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

--
-- 
--  SEEDS SEEDS SEEDS SEEDS SEEDS SEEDS SEEDS SEEDS SEEDS SEEDS SEEDS SEEDS SEEDS
-- 
-- 

-- employees Seeds

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("David", "Scott", 1, null);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Sara", "Cunningham", 2, "David Scott");

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Kara", "Schmidt", 3, null);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Moriah", "Claud", 3, "Kara Schmidt");

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Brian", "Hudson", 5, null);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Maria", "Long", 6, "Brian Hudson");

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Phyllis", "Odell", 7, null);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Ryan", "Gutierrez", 8, "Phyllis Odell");

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Lisa", "Simpson", 3, "Ryan Gutierrez");

-- Role Seeds
INSERT INTO roles (title, salary, department_id)
VALUES ("Lead of Sales", 100.000, 1);

INSERT INTO roles (title, salary, department_id)
VALUES ("Sales Person", 80.000, 1);

INSERT INTO roles (title, salary, department_id)
VALUES ("Senior Developer", 150.000, 2);

INSERT INTO roles (title, salary, department_id)
VALUES ("Junior Developer", 120.000, 2);

INSERT INTO roles (title, salary, department_id)
VALUES ("HR Manager", 160.000, 3);

INSERT INTO roles (title, salary, department_id)
VALUES ("Admin Assistant", 80.000, 3);

INSERT INTO roles (title, salary, department_id)
VALUES ("Customer Representative", 250.000, 4);

INSERT INTO roles (title, salary, department_id)
VALUES ("Customer Service Manager", 190.000, 4);

-- Department Seeds
INSERT INTO department (name)
VALUES ("Sales");

INSERT INTO department (name)
VALUES ("Programming");

INSERT INTO department (name)
VALUES ("Human Resources");

INSERT INTO department (name)
VALUES ("Customer Relations");