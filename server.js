//Dependencies
const inquirer = require('inquirer');//inquirer not express
const mysql = require('mysql2');
// const path = require('path');
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

//array showing the up to date department list, including newly added depts.
let departmentList = [];

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
        console.log(results);
        console.table(results);
        questions();
    });
};

//querying data from multiple tables
function viewRoles() {
    db.query(`SELECT 
    role.id, 
    role.title, 
    role.salary, 
    department.name AS department 
    FROM role LEFT JOIN department ON role.department_id = department.id`, (err, results) => {
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

//assistance from tutor, add new dept and role 
//Insert into now works for both functions
function addDepartment() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'newDepartment',
                message: 'Enter the new department: ',
            },
        ])
        .then((answer) => {
            const newDepartment = answer.newDepartment;
            db.query(`INSERT INTO department(name) VALUES('${newDepartment}');`
                , (err, results) => {
                    if (err) throw err;
                    console.log('')
                    console.log(`The new department, ${newDepartment}, was added.`)
                    console.log('')
                    questions();
                })
        });
};

//assistance from tutor, map method creating a new array from results
//callback needed to pass departmentList into addRole
//sql modifying data portion of addRole altered so there was no error when dept name was chosen instead of an integer that was epected. 
function createDepartmentList(callback) {
    db.query('SELECT id, name FROM department', (err, results) => {
        if (err) throw err;
        departmentList = results.map(department => (department.name));
        callback(departmentList);
    });
};

function addRole() {
    createDepartmentList((departmentList) => {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'title',
                    message: 'Enter the new title role: ',
                },
                {
                    type: 'input',
                    name: 'salary',
                    message: 'Enter the salary: ',
                },
                {
                    type: 'list',
                    name: 'department',
                    message: 'Choose the department for the new role: ',
                    choices: departmentList,
                }
            ])
            .then((answer) => {
                const newTitle = answer.title;
                const newSalary = answer.salary;
                const newDepartment = answer.department;
                db.query(`INSERT INTO role(title, salary, department_id) SELECT '${newTitle}', '${newSalary}', id FROM department WHERE name = '${newDepartment}';`,
                    (err, results) => {
                        if (err) throw err;
                        console.log('')
                        console.log(`The new role, ${newTitle}, was added.`)
                        console.log('')
                        questions();
                    })
            });
    });
};

//following AddRole function
function createManagerList(callback) {
    db.query('SELECT id, manager_id FROM employee', (err, results) => {
        if (err) throw err;
        managerList = results.map(employee => (employee.manager_id));
        callback(managerList);
    });
};

function addEmployee() {
    createManagerList((managerList) => {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'firstName',
                    message: 'Enter the Employee first name: ',
                },
                {
                    type: 'input',
                    name: 'lastName',
                    message: 'Enter the Employee last name: ',
                },
                {
                    type: 'input',
                    name: 'role',
                    message: 'Enter the Employee role: ',
                },
                {
                    type: 'list',
                    name: 'manager',
                    message: 'Choose the manager for the Employee: ',
                    choices: managerList,
                }
            ])
            .then((answer) => {
                const newFirstName = answer.firstName;
                const newLastName = answer.lastName;
                const newRole = answer.role;
                const newManager = answer.manager;
                db.query(`INSERT INTO employee(first_name, last_name, role_id, manager_id)
            SELECT '${newFirstName}', '${newLastName}', '${newRole}', '${newManager}';`,
                    (err, results) => {
                        if (err) throw err;
                        console.log('')
                        console.log(`The Employee, ${newFirstName} ${newLastName}, was added.`)
                        questions();
                    })
            });
    });
};

questions();










