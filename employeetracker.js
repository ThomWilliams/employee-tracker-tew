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