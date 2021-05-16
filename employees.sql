DROP DATABASE IF EXISTS employees_DB;

CREATE DATABASE employees_DB;

USE employees_DB;

CREATE TABLE departments (
  id INT NOT NULL AUTO_INCREMEMT,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE roles (
  id INT NOT NULL AUTO_INCREMEMT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(10,2) NOT NULL,
  departments_id INT NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE employees (
  id INT NOT NULL AUTO_INCREMEMT,
  first_name VARCHAR(20) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  roles_id INT NOT NULL,
  manager_id INT,
  PRIMARY KEY (id)
);


SELECT * FROM departments;
SELECT * FROM roles;
SELECT * FROM employees;



-- * **department**:

--   * **id** - INT PRIMARY KEY
--   * **name** - VARCHAR(30) to hold department name

-- * **role**:

--   * **id** - INT PRIMARY KEY
--   * **title** -  VARCHAR(30) to hold role title
--   * **salary** -  DECIMAL to hold role salary
--   * **department_id** -  INT to hold reference to department role belongs to

-- * **employee**:

--   * **id** - INT PRIMARY KEY
--   * **first_name** - VARCHAR(30) to hold employee first name
--   * **last_name** - VARCHAR(30) to hold employee last name
--   * **role_id** - INT to hold reference to role employee has
--   * **manager_id** - INT to hold reference to another employee that manages the employee being Created. This field may be null if the employee has no manager