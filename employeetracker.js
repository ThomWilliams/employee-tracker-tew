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
const start = () => {
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
    name: 'table',
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
    switch (answer.table) {
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
        console.log(`Invalid action: ${answer.table}`);
        break;
    }
  });
};



// CREATE / ADD DEPARTMENT DATA
const addDepartmentData = () => {
  inquirer.prompt({
    name: 'departmentName',
    type: 'input',
    message: 'Please enter the Name of the department',
  })
  .then((answer) => {
    connection.query(
     'INSERT INTO departments SET ?',
     { 
       name: answer.departmentName,
     },
     (err, res) => {
      if (err) throw err;
      console.log('Department Name Added to Database!');
      // re-prompt the user if they want to go through options again
      start();
    }
  );
  });
}
  

// CREATE / ADD ROLES DATA 

const addRolesData = () => {
  inquirer.prompt({
    name: 'rolesTitle',
    type: 'input',
    message: 'Please enter the title of the role',
  },
  {
    name: 'rolesSalary',
    type: 'input',
    message: 'Please enter the salary for this role',
  }, 
  {
    name: 'rolesDepartmentID',
    type: 'input',
    message: 'Please enter the Department ID code for this role',
  })
  .then((answer) => {
    connection.query(
     'INSERT INTO departments SET ?',
     { 
        title: answer.rolesTitle,
        salary: answer.rolesSalary,
        departments_id: answer.rolesDepartmentID,
     },
     (err, res) => {
      if (err) throw err;
      console.log('Roles data Added to Database!');
      // re-prompt the user if they want to go through options again
      start();
    }
  );
  });
 
};


// ADD EMPLOYEE DATA INQUIRER
const addEmployeeData = () => {
  inquirer.prompt({
    name: 'employeeID',
    type: 'input',
    message: 'Please enter the ID code for the Employee',
  },
  {
    name: 'employeeFirstName',
    type: 'input',
    message: 'Please enter the First Name of the Employee',
  }, 
  {
    name: 'employeeLastName',
    type: 'input',
    message: 'Please enter the Last Name of the Employee',
  }, 
  {
    name: 'employeeRolesID',
    type: 'input',
    message: 'Please enter the ID for this Employees role',
  }
  )
  .then((answer) => {
    connection.query(
     'INSERT INTO departments SET ?',
     { 
      first_name: answer.employeeFirstName,
      last_name: answer.employeeLastName,
      roles_id: answer.employeeRolesID,
      manager_id: answer.employeeManagerID,
     },
     (err, res) => {
      if (err) throw err;
      console.log('Employees data Added to Database!');
  
      // re-prompt the user if they want to go through options again
      start();
    }
  );
  });
};

start();

// TO DO...

// CREATE - Get the Add Data working...

// READ or "SEARCH INQUIRERS FOR - VIEW DEPARTMENTS / EMPLOYEES / ROLES DATA"

// UPDATE -  DEPARTMENTS / EMPLOYEES / ROLES DATA 



// THINK OF C.R.U.D. 
// SEE activities 9 and 10
// * Add departments, roles, employees
// * View departments, roles, employees
// * Update employee roles
