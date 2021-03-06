const Employee = require('./employee');

class Engineer extends Employee {
    //constructor that takes in github username
    constructor(name, title, email, id, github){
        // as super that passes is all the values from Employee name, title, email, id
        super(name, title, email, id);
        this.github = github
    }
    //methods
    getGithub(){
        return this.github;
    }
    getRole(){
        return "Engineer"
    }

};
module.exports = Engineer;
