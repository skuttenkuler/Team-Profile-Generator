var IDnum = 1;
class Employee {
    //constructor with name, title, and email
    constructor(name,title,email) {
        this.name = name;
        this.title = title;
        this.email = email;
        this.id = IDnum++;
        
    }
    //methods return each value
    getName() {
        return this.name
    }

    getTitle() {
        return this.title
    }

    getEmail(){
        return this.email
    }
    
    getId() {
        return this.title
    }
    getRole() {
        return "Employee"
    }
}
module.exports = Employee;