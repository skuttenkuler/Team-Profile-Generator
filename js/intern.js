const Employee = require('./employee');

class Intern extends Employee {
    //constructor that takes in school
    constructor(school){
        // as super that passes is all the values from Employee name, title, email, id
        super(name, title, email, id);
        this.school = school
    }
    //methods
    getSchool(){
        return this.school;
    }
    getRole(){
        //overridden to return "intern"
    }

};
module.exports = Intern;
