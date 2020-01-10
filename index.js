const fs = require('fs');
const inquirer = require('inquirer');


//import roles
const Engineer = require('./js/engineer');
const Intern = require('./js/intern');
const Manager = require('./js/manager');

// set global
const team = {
    engineers: {},
    interns:{},
    managers: {},
}
//initiate app
// inquire role user is looking for

//ask for name, title, email with inquirer
