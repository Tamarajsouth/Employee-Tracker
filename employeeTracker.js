// dependencies
var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "employee_tracker_DB"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  askQuestions();
});

// // function which prompts the user for what action they should take
function askQuestions() {
    inquirer
      .prompt({
        message: "What action would you like to take?",
        type: "list",
        choices: [
            "Add department", 
            "Add role", 
            "Add employee",
            "View departments",
            "View roles",
            "View employee",
            "Update employee role",
            "EXIT",
            ],
        name: "choice"
      })
      .then(function(answers) {
          console.log(answers.choice);
    // Use the switch statement to select one of many code blocks to be executed.
    // The switch statement evaluates an expression, matching the expression's value 
    // to a case clause, and executes statements associated with that case, 
    // as well as statements in cases that follow the matching case
        switch (answers.choice) {
            case "Add department":
                addDepartment()
                break;
            case "Add role":
                addRole()
                break;
            case "Add employee":
                addEmployee()
                break;
            case "View departments":
                viewDepartments()
                break;
            case "View roles":
                viewRoles()
                break;
            case "View employee":
                viewEmployee()
                break
            case "Update employee role":
                updateEmployeeRole()
                break;
            default:
                connection.end()
                break;
        }
    // When JavaScript reaches a break keyword, it breaks out of the switch block.
    // This will stop the execution of inside the block.
    // It is not necessary to break the last case in a switch block. The block breaks (ends) there anyway.
    // Note: If you omit the break statement, the next case will be executed even if the evaluation does not match the case.
  })
}

// define functions 

// INSERT INTO (table name) VALUES (?)
// function addDepartment()

// function addRole()

// function addEmployee()

// SELECT FROM to show data from tables
function viewDepartments() {
    connection.query("SELECT * FROM department", function (err, data) {
        console.table(data);
        askQuestions();
    })
}
function viewRoles() {
    connection.query("SELECT * FROM roles", function (err, data) { 
        console.table(data);
        askQuestions();
     })
}
function viewEmployee() {
    connection.query("SELECT * FROM employees", function (err, data) {
        console.table(data);
        askQuestions();
    })
}

// UPDATE ? WHERE ?
// function updateEmployeeRole()

            
