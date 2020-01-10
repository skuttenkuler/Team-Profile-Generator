const Employee  = require('../js/employee');

//what are we testing
describe("Employee", () => {

    //when it initializion..
    describe("init", () => {

        //check for all values
        it("should have all 4 keys", () => {
            var employee = new Employee("Sam", "Engineer", "me@me.com");
            expect(employee).toEqual({name:"Sam", title:"Engineer", email:"me@me.com", id: 1});
        });
        //check for id assignment and incrementation
        it("should increment the id# with each new Employee", () =>{
            //give 3 employees
            var e1 = new Employee("Sam", "Engineer","me@me.com")
            var e2 = new Employee("Vader", "Manager","vader@deathstar.org")
            var e3 = new Employee("Kylo", "Intern","kylo@deathstar.org")
            //expect employee 3 to be id #3
            expect(e3.id).toEqual(e1.id+2)
        });
    })
})

    //test methods
        //getName()
        describe("getName", ()=>{
            it("should return name value", () => {
                //define explicit value that is given
                var employee = new Employee("Sam", "Engineer","me@me.com");
                //i want the getName return to be "Sam"
                expect(employee.getName()).toEqual("Sam");
            });
            
        })
        //getTitle()
        describe("getTitle", ()=>{
            it("should return title value", () => {
                var employee = new Employee("Sam", "Engineer","me@me.com");
                expect(employee.getTitle()).toEqual("Engineer");
            })
        })
        //getEmail
        describe("getEmail", ()=>{
            it("should return email value", () => {
                var employee = new Employee("Sam", "Engineer","me@me.com");
                expect(employee.getEmail()).toEqual("me@me.com")
            })
        })
        //getRole()
        describe("getRole", () => {
            it("should return Employee string", () => {
                var employee = new Employee("Sam", "Engineer","me@me.com");
                expect(employee.getRole()).toEqual("Employee");
            })
        })
