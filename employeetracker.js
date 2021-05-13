// requires mysql 
const mysql = require('mysql');
const inquirer = require('inquirer');

// defines connection using MySQL database
const connection = mysql.createConnection({
  host: 'localhost',

  // Port 3306
  port: 3306,

  // Your username
  user: 'root',

  // MySQL password!
  password: 'buzzlightyear15',
  // connects to database
  database: 'employees_DB',
});


// connects to MySQL
connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}`);
  connection.end();
});


// SELECT TABLE TO ADD DATA TO 
const runSearch = () => {
  inquirer
    .prompt({
      name: 'action',
      type: 'rawlist',
      message: 'What would you like to do?',
      choices: [
        'Add departments, roles, employees',
        'View departments, roles, employees',
        'Update employee roles',
        'Exit',
      ],
    })
    .then((answer) => {
      switch (answer.action) {
        case 'Add departments, roles, employees':
          addData();
          break;

        case 'View departments, roles, employees':
          viewData();
          break;

        case 'Update employee roles':
          updateEmployeeRoles();
          break;

        case 'Exit':
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
  inquirer.prompt({
    name: 'action',
    type: 'rawlist',
    message: 'What would you like to add data to?',
    choices: [
      'Add departments',
      'Add roles',
      'Add employees',
      'Exit',
    ],
  })
  .then((answer) => {
    switch (answer.action) {
      case 'Add departments':
        addDepartmentData();
        break;

      case 'Add roles':
        addRolesData();
        break;

      case 'Add employee data':
        addEmployeeData();
        break;

      case 'Exit':
          connection.end();
          break;

      default:
        console.log(`Invalid action: ${answer.action}`);
        break;
    }
  });
};

// ADD DEPARTMENT DATA INQUIRER
// ADD EMPLOYEE DATA INQUIRER
// ADD ROLES DATA INQUIRER
// ADD DATA INQUIRER

// LATER... INQUIRERS FOR
// VIEW DEPARTMENTS / EMPLOYEES / ROLES DATA 
// UPDATE DEPARTMENTS / EMPLOYEES / ROLES DATA 