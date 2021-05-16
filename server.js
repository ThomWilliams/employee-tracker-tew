// requires mysql
const mysql = require("mysql");
const inquirer = require("inquirer");

// defines connection using MySQL database
const connection = mysql.createConnection({
  host: "localhost",

  // Port 3306
  port: 3306,

  // Your username
  user: "root",

  // MySQL password!
  password: "buzzlightyear15",
  // connects to database
  database: "employees_DB",
});

// connects to MySQL
connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}`);
});

// SELECT TABLE TO ADD DATA TO
const start = () => {
  inquirer
    .prompt({
      name: "action",
      type: "rawlist",
      message: "What would you like to do?",
      choices: [
        "Add departments, roles, employees",
        "View departments, roles, employees",
        "Update employee roles",
        "Exit",
      ],
    })
    .then((answer) => {
      switch (answer.action) {
        case "Add departments, roles, employees":
          addData();
          break;

        case "View departments, roles, employees":
          viewData();
          break;

        case "Update employee roles":
          updateEmployeeRoles();
          break;

        case "Exit":
          connection.end();
          break;

        default:
          console.log(`Invalid action: ${answer.action}`);
          break;
      }
    });
};

// SELECT TABLE TO ADD DATA TO
const addData = () => {
  inquirer
    .prompt({
      name: "addTable",
      type: "rawlist",
      message: "What would you like to add data to?",
      choices: ["Add departments", "Add roles", "Add employees", "Exit"],
    })
    .then((answer) => {
      switch (answer.addTable) {
        case "Add departments":
          addDepartmentData();
          break;

        case "Add roles":
          addRolesData();
          break;

        case "Add employees":
          addEmployeeData();
          break;

        case "Exit":
          connection.end();
          break;

        default:
          console.log(`Invalid action: ${answer.addTable}`);
          break;
      }
    });
};

// CREATE / ADD DEPARTMENT DATA
const addDepartmentData = () => {
  inquirer
    .prompt({
      name: "departmentName",
      type: "input",
      message: "Please enter the Name of the department",
    })
    .then((answer) => {
      connection.query(
        "INSERT INTO departments SET ?",
        {
          name: answer.departmentName,
        },
        (err, res) => {
          if (err) throw err;
          console.log("Department Name Added to Database!");
          // re-prompt the user if they want to go through options again
          start();
        }
      );
    });
};

// CREATE / ADD ROLES DATA

const addRolesData = () => {
  connection.query("SELECT * FROM departments", (err, results) => {
    if (err) throw err;
    inquirer
      .prompt([
        {
          name: "title",
          type: "input",
          message: "Please enter the title of the role",
        },
        {
          name: "salary",
          type: "input",
          message: "Please enter the salary for this role",
        },
        {
          name: "departments_id",
          type: "list",
          choices() {
            return results.map(({ id, name }) => {
              return { name: name, value: id };
            });
          },
          message: "Please enter the Department ID code for this role",
        }]
      )
      .then((answer) => {
        connection.query("INSERT INTO roles SET ?", answer, (err, res) => {
          if (err) throw err;
          console.log("Roles data Added to Database!");
          // re-prompt the user if they want to go through options again
          start();
        });
      });
  });
};

// ADD EMPLOYEE DATA INQUIRER
const addEmployeeData = () => {
  connection.query("SELECT * FROM roles", (err, results) => {
    if (err) throw err;
    inquirer
      .prompt([
        {
          name: "first_name",
          type: "input",
          message: "Please enter the First Name of the Employee",
        },
        {
          name: "last_name",
          type: "input",
           message: "Please enter the Last Name of the Employee",
        },
        {
          name: "roles_id",
          type: "list",
          choices() {
            return results.map(({ id, title }) => {
              return { name: title, value: id };
            });
          },
          message: "Please select the Roles ID",
        }, 
        {
          name: "manager_id",
          type: "input",
          message: "Please enter the ID of the manager",
        },
      ]
      )
      .then((answer) => {
        connection.query("INSERT INTO employees SET ?", answer, (err, res) => {
          if (err) throw err;
          console.log("Employees data Added to Database!");
          // re-prompt the user if they want to go through options again
          start();
        });
      });
  });
};

// VIEW / READ TABLE DATA SELECTOR

const viewData = () => {
  inquirer
    .prompt({
      name: "viewTable",
      type: "rawlist",
      message: "Which table would you like to view?",
      choices: ["View departments", "View roles", "View employees", "Exit"],
    })
    .then((answer) => {
      switch (answer.viewTable) {
        case "View departments":
          viewDepartmentData();
          break;

        case "View roles":
          viewRolesData();
          break;

        case "View employees":
          viewEmployeeData();
          break;

        case "Exit":
          connection.end();
          break;

        default:
          console.log(`Invalid action: ${answer.viewTable}`);
          break;
      }
    });
};

// VIEW DEPARTMENT DATA IN COMMAND LINE
const viewDepartmentData = () => {
  connection.query("SELECT * FROM departments", (err, results) => {
    if (err) throw err;
    console.table(results);
  });
  start();
};

// VIEW ROLES DATA IN COMMAND LINE

const viewRolesData = () => {
  connection.query("SELECT * FROM roles", (err, results) => {
    if (err) throw err;
    console.table(results);
  });
  start();
};

// VIEW EMPLOYEE DATA IN COMMAND LINE

const viewEmployeeData = () => {
  connection.query("SELECT * FROM employees", (err, results) => {
    if (err) throw err;
    return console.table(results);
  });
  start();
};

// UPDATE Employee Roles ID 
const updateEmployeeRoles = () => {
  let employeeID;
  let roleId;

   // Selects The Employees from Employees Table
  connection.query("SELECT * FROM employees", (err, results) => {
    if (err) throw err;
    inquirer.prompt([{
      name: "employee_id",
      type: "list",
      choices() {
        return results.map(({ id, first_name, last_name}) => {
          return {
            name: first_name + last_name, value: id
          };
        });
      },
      message: "Which employee would you like to update?"

    }]).then(({ employee_id }) => {
      console.log("setting employeeID to ", employee_id)
      employeeID = employee_id;
      console.log("Got employeeID ", employeeID);
  
      // Selects Role ID from Roles Table
    connection.query("SELECT * FROM roles", (err, results) => {
    console.log("employeeID", employeeID)
      if (err) throw err;
        inquirer.prompt([{
          name: "role_id",
          type: "list",
      choices() {
        return results.map(({ id, title }) => {
        return { name: title, value: id };
        });
      },
      message: "Which new role would you like to give this employee??"

    }]).then(({ role_id }) => {
      console.log("roles", role_id)
      roleId = role_id;
      console.log("Update employeeID ", employeeID, "roleId ", roleId)
  
    // Updates Role ID in the Employees Table
      connection.query("UPDATE employees SET roles_id = ? WHERE id = ?", [roleId, employeeID], (err, results) => {
      if (err) throw err;
      console.log("Updated role")
    start();
  });

    }).catch(error => {
      console.log("Error selecting roles")
    })
  });

    }).catch(error => {
      console.log("Error selecting employees")
    })
  });
}

start();
