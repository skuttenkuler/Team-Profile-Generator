var id;
class Employee {
    //constructor with name, title, and email
    constructor(name,title,email) {
        this.name = name;
        this.title = title;
        this.email = email;
        this.id = id++ 
        
    }
    //methods return each value
    getName() {
        return this.name
    }

    getId() {
        return this.title
    }

    getEmail(){
        return this.email
    }

    getRole() {
        //return employee
    }
}
module.exports = Employee;