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
            name:'Role',
            message:"Select new role..",
            choices: roles,
        }
    ]).then(response => {
        //if done render the HTML
        if(response.Role === "--Done--"){
            renderHTML();
        }
        //else function employeeDetails with the role
        else{
            
            employeeDetails(response.Role);
        }
    })
}
function employeeDetails(role){
    //make questions object
    
    //if Engineer push engineer question to questions object
    //if Intern push intern question to questions object
    //if Manager push manager question to questions object
    inquirer.prompt([
        {
            type: 'prompt',
            message:`What's the ${role}'s name?`,
            name:'name',
        },
        {
            type: 'prompt',
            message:"What's the employee's title",
            name:'name',
        },
        {
            type: 'prompt',
            message:"What's the employee's name",
            name:'name',
        }
    ]).then(response => {
//ask for name, title, email with inquirer

//if Engineer role
    //ask for github
//if Intern 
    //ask for school
//if Manager
    //ask for office number
//take all responses and role
//console.log data
}
function renderHTML(){
    console.log("yo we full, no more hiring")
}