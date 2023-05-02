//Dependencies
const inquirer = require('inquirer');//inquirer not express
const mysql = require('mysql2');
const path = require('path');
const table = require('console.table'); //displays tabular data as a table.

//Connecting to database
const db = mysql.createConnection(
    {
        host: '127.0.0.1',
        // MySQL username,
        user: 'root',
        // MySQL password
        password: 'P@ssword9',
        database: 'employee_db'
    },
    console.log(`Connected to the employee database.`)
);

//When app opens, presented with: 
//view all departments, 
//view all roles, 
//view all employees, 
//add a department, 
//add a role, 
//add an employee, 
//update an employee role
//function
//switch statement, if match, code is run
function questions() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'introduction',
                message: 'Hello, what would you like to do?',
                choices: [
                    'View all Departments',
                    'View all Roles',
                    'View all Employees',
                    'Add a Department',
                    'Add a Role',
                    'Add an Employee',
                    'Update an Employee Role'
                ]
            }
        ])
        .then((answer) => {
            switch (answer.introduction) {
                case 'View all Departments':
                    viewDepartments();
                    break;
                case 'View all Roles':
                    viewRoles();
                    break;
                case 'View all Employees':
                    viewEmployees();
                    break;
                case 'Add a Department':
                    addDepartment();
                    break;
                case 'Add a Role':
                    addRole();
                    break;
                case 'Add an Employee':
                    addEmployee();
                    break;
                case 'Update an Employee Role':
                    updateEmployeeRole();
            }
        })
};

//querying data from one table
function viewDepartments() {
    db.query('SELECT id, name FROM department', (err, results) => {
        if (err) throw err;
        console.table(results);
        questions();
    });
};

//querying data from multiple tables
function viewRoles() {
    db.query('SELECT role.id, role.title, role.salary, department.name AS department FROM role LEFT JOIN department ON role.department_id = department.id', (err, results) => {
        if (err) throw err;
        console.table(results);
        questions();
    })
};

function viewEmployees() {
    db.query(`SELECT 
    employee.id, 
    employee.first_name, 
    employee.last_name, 
    role.title, 
    role.salary, 
    department.name AS department 
    FROM employee LEFT JOIN role ON employee.role_id = role.id 
    LEFT JOIN department ON role.department_id = department.id 
    LEFT JOIN employee AS manager ON employee.manager_id = manager.id`, (err, results) => {
        if (err) throw err;
        console.table(results);
        questions();
    })
};

questions();

//     {
        
//When view all departments is chosen, presented with:
//formatted table showing department names and department ids        
//         validate: (response) => {
//             if(response === 'View all Departments') {
//                 return 
//             }            
//         }
    // };
// ];





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








