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
        createEmployee(answers, role)
    });
    //console.log data
}

function createEmployee(answers, role){
    //if engineer create new engineer and push to team object
    if(role === "Engineer"){
        let engineer = new Engineer(answers.name,answers.title,answers.email,answers.github);
        team.engineers.push(engineer);
    }
    //if intern create new intern and push to team object
    else if(role === "Intern"){
        let intern = new Intern(answers.name,answers.title,answers.email,answers.school);
        team.interns.push(intern);
    }
    //if manager create new manager and push to team object
    else if(role === "Manager"){
        let manager = new Manager(answers.name,answers.title,answers.email,answers.officeNumber);
        team.managers.push(manager);
    }
    newRole();
}
function renderHTML(){
    var teamHTML = "";
    //console.log("yo we full, no more hiring")
    //make sure we have team members in our team object
    if(team.engineers.length === 0){
        alert("need at least one Engineer")
        return newRole();
    }
    if(team.interns.length === 0){
        alert("need at least one Engineer")
        return newRole();
    }
    if(team.managers.length === 0){
        alert("need at least one Engineer")
        return newRole();
    }
    //for loop to go through team.engineers and for each item inject info to template
    for(engineer in team.engineers){

    }
    //for loop to go through team.interns and for each item inject info to template
    for(intern in team.interns){

    }
    //for loop to go through team.managers and for each item inject info to template
    for(manager in team.managers){

    }
    //write to the file in html
    fs.writeFile("./Teams/team.html", teamHTML,(err) =>{
        if (err) throw err;
        console.log("your tteam has successfully generated");
    });

}
function getHTML(){
    fs.readFile("templates/main.html"),"utf-8",( err, template) => {
        if (err) throw err;
        mainHTML = template
    }
    fs.readFile("templates/engineer.html"),"utf-8",( err,template) => {
        if (err) throw err;
        engineerHTML = template
    }
    fs.readFile("templates/intern.html"),"utf-8",( err,template) => {
        if (err) throw err;
        internHTML = template
    }
    fs.readFile("templates/manager.html"),"utf-8",( err,template) => {
        if (err) throw err;
        managerHTML = template
    }
}