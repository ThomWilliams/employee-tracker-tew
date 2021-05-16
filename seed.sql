USE employees_DB;

INSERT INTO departments (name)
VALUES ("Front End Development");

INSERT INTO roles (title, salary, departments_id)
VALUES ("Developer", 23000.00, 1);

INSERT INTO employees (first_name, last_name, roles_id, manager_id)
VALUES ("Thom", "Williams", 1, null);


INSERT INTO departments (name)
VALUES ("Back End Development");

INSERT INTO roles (title, salary, departments_id)
VALUES ("Engineer", 29000.00, 2);

INSERT INTO employees (first_name, last_name, roles_id, manager_id)
VALUES ("Rob", "Smith", 2, 1;


INSERT INTO departments (name)
VALUES ("Social Media");

INSERT INTO roles (title, salary, departments_id)
VALUES ("Marketing Assistant", 19000.00, 3);

INSERT INTO employees (first_name, last_name, roles_id, manager_id)
VALUES ("Katie", "Jones", 3, null);

