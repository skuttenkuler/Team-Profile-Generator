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
            //console.log(response.Role)
            employeeDetails(response.Role);
        }
    })
}
function employeeDetails(role){
    //make questions object
        var questions = [
            {
                type: 'prompt',
                message:`What's the ${role}'s name?`,
                name:'name',
            },
            {
                type: 'prompt',
                message:`What's the ${role}'s title?`,
                name:'title',
            },
            {
                type: 'prompt',
                message:`What's the ${role}'s email?`,
                name:'email',
            }
        ];

 //if Engineer push engineer question to questions object   
        if(role === "Engineer"){
            questions.push({
                type: 'prompt',
                message:`What's the ${role}'s github username?`,
                name:'github',
            });
        }
    //if Intern push intern question to questions object
        else if(role === "Intern"){
            questions.push({
                type: 'prompt',
                message:`Which school does the ${role} go to?`,
                name:'school',
            });
        }
    //if Manager push manager question to questions object
        else if(role === "Intern"){
            questions.push({
                type: 'prompt',
                message:`What's the ${role}'s Office Number?`,
                name:'officeNumber',
            });
    }
    //run inquire and feed it the questions object
    inquirer
    .prompt(questions).then(
        answers => {
        console.log(answers)
    });
    //console.log data
}
function renderHTML(){
    console.log("yo we full, no more hiring")
}