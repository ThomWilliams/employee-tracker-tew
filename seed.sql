USE employees_DB;

INSERT INTO departments (name)
VALUES ("Front End Development");

INSERT INTO roles (title, salary, departments_id)
VALUES ("Developer", 23000.00, 01);

INSERT INTO employees (first_name, last_name, roles_id, manager_id)
VALUES ("Thom", "Williams", 01, 01);


INSERT INTO departments (name)
VALUES ("Back End Development");

INSERT INTO roles (title, salary, departments_id)
VALUES ("Engineer", 29000.00, 06);

INSERT INTO employees (first_name, last_name, roles_id, manager_id)
VALUES ("Rob", "Smith", 20, 77);


INSERT INTO departments (name)
VALUES ("Social Media");

INSERT INTO roles (title, salary, departments_id)
VALUES ("Marketing Assistant", 19000.00, 12);

INSERT INTO employees (first_name, last_name, roles_id, manager_id)
VALUES ("Katie", "Jones", 436, 39875);

