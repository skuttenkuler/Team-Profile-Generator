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
init();
function init(){
    newRole();
}
// inquire role user is looking for
function newRole(){
    var roles = ["Engineer","Intern","Manager","--Done--"];
    inquirer.prompt([
        {
            type: 'list',
            message:"select new role",
            name:'newRoles',
            choices: roles,
        }
    ]).then(response => {
        //if done render the HTML
        console.log(response.data)
    })
}
//ask for name, title, email with inquirer
