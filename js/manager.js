const Employee = require('./employee');

class Manager extends Employee {
    //constructor that takes in office number
    constructor(name, title, email, id,officeNumber){
        // as super that passes is all the values from Employee name, title, email, id
        super(name, title, email, id);
        this.officeNumber = officeNumber
    }
    //methods
    getOfficeNumber(){
        return this.officeNumber;
    }
    getRole(){
        return "Manager"
    }

};
module.exports = Manager;
