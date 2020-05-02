# Employee-Tracker
an app to be used for managing a company's employees using node, inquirer, and MySQL

Developers are often tasked with creating interfaces that make it easy for non-developers to view and interact with information stored in databases. Often these interfaces are known as **C**ontent **M**anagement **S**ystems. In this homework assignment, your challenge is to architect and build a solution for managing a company's employees using node, inquirer, and MySQL.

```
As a business owner
I want to be able to view and manage the departments, roles, and employees in my company
So that I can organize and plan my business
```

### Installation:
```node employeetracker.js```

### Built With:

* [MySQL](https://www.npmjs.com/package/mysql) NPM package to connect to your MySQL database and perform queries.

* [InquirerJs](https://www.npmjs.com/package/inquirer/v/0.2.3) NPM package to interact with the user via the command-line.

* [console.table](https://www.npmjs.com/package/console.table) to print MySQL rows to the console. There is a built-in version of `console.table`, but the NPM package formats the data a little better for our purposes.

### Functionality:

* The command-line application should allow users to:
  * Add departments, roles, employees

  * View departments, roles, employees

  * Update employee roles

  * Delete departments, roles, and employees

### Future Development: 
* **5/1/20:** Application is still in development. Future versions will have better functionality for deleting data and adding data to the table. Commented out code in ```employeetracker.js``` represents my ideas to build out further.  
