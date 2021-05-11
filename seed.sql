USE employees_DB;

INSERT INTO departments (name)
VALUES ("Front End Development");

INSERT INTO roles (title, salary, departments_id)
VALUES ("Developer", 23000.00, 01);

INSERT INTO employees (first_name, last_name, roles_id, manager_id)
VALUES ("Thom", "Williams", 01, 01);


