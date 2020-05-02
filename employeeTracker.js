// dependencies
const mysql = require("mysql");
const inquirer = require("inquirer");
// const cTable = require('console.table');


// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // establish a port
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
        name: "choice",  
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
      })
      .then(function(answers) {
          console.table(answers.choice);
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
// SELECT * FROM (table name)

// function addDepartment()
function addDepartment() {
    inquirer.prompt([{
    type: "input",
    name: "department",
    message: "What Department do you want to add?"
}, ]) .then(function(response) {
    connection.query("INSERT INTO department (name) VALUES (?)", [response.department], function(err, data) {
        if (err) throw err;
        console.log("Successfully added Department");
        console.table(data);
        askQuestions();
    })
})
}

// function addRole()
//  role = title, salary, department_id
function addRole() {
    inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "Enter Title of Role",
    },
    {
        type: "number",
        name: "salary",
        message: "Enter Salary for Role",
    },
    {
        type: "number",
        name: "department_id",
        message: "Enter Department ID Number for Role",
    }
]).then(function (response){
    connection.query("INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)",  
    [response.title, response.salary, response.department_id], function (err, data) {
        if (err) throw err;
        console.log("Added New Role Successfully!")
        console.table(data);
        askQuestions();
    })
})
}
// ADD employee - INSERT INTO employees
function addEmployee() {
    inquirer.prompt([{
        
        type: "input",
        name: "first_name",
        message: "What is the Employee's First Name?:"
    },
    {
        type: "input",
        name: "last_name",
        message: "What is the Employee's Last Name?:"
    },  
    {
        type: "input",
        name: "manager_id",
        message: "Who is the Employee's Manager (First and Last Name)?:"
    },   
    {
        type: "number",
        name: "role_id",
        message: "What is the Employee's Role ID?:"
    }
    ]).then(function(response){
        connection.query("INSERT INTO employees (first_name, last_name, manager_id, role_id) VALUES (?, ?, ?, ?)", 
        [response.first_name, response.last_name, response.manager_id, response.role_id], function(err, data) {
            if (err) throw err;
            console.table("Added New Employee!");
            askQuestions();
        })
    })
}

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

// UPDATE ?(employee) SET (role_id) = ? WHERE (name) = ?
function updateEmployeeRole() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Which Employee (by first name only) would you like to update?"
        }, {
            type: "number",
            name: "role_id",
            message: "Enter the new role ID for Employee:"
        }
    ]).then(function (response) {
        connection.query("UPDATE employees SET role_id = ? WHERE first_name = ?", [response.role_id, response.name], function (err, data) {
            console.table(data);
        })
        askQuestions();
    })
}              
