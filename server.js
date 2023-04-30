//Dependencies
const express = require('express');
const mysql = require('mysql12');
const path = require('path');

const PORT = process.env.PORT || 3001;
const app = express();

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Connecting to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username,
        user: 'root',
        // MySQL password
        password: '',
        database: 'employee_db'
      },
      console.log(`Connected to the employee_db database.`)
    );

//When app opens, presented with: 
    //view all departments, 
    //view all roles, 
    //view all employees, 
    //add a department, 
    //add a role, 
    //add an employee, 
    //update an employee role


//When view all departments is chosen, presented with:
      //formatted table showing department names and department ids

//When view all roles is chosen, presented with:
      //the job title, role id, the department that role belongs to, and the salary for that role

//When view all employees is chosen, presented with:
      //a formatted table showing employee ids, first, last names, job titles, departments, salaries, and managers

//When a department is added, prompted to:
    //enter the name of the department and that department is added to the database

//When a role is added, prompted to:
      //enter the name, salary, and department for the role and that role is added to the database

//When an employee is added, prompted to:
      //enter first name, last name, role, and manager, and that employee is added to the database

//When action is taken to update an employee role:
      //prompted to select an employee to update and their new role and info is updated in the database 








//Specifying port number
app.listen(PORT, () => {
    console.log(`App listening at ${PORT}`)
});