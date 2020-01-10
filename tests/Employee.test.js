const Employee  = require('../js/employee');

//what are we testing
describe("Employee", () => {

    //when it initializion..
    describe("init", () => {

        //check for all values
        it("should have all 4 keys", () => {
            var employee = new Employee("Sam", "Engineer", "me@me.com");
            expect(employee).toEqual({name:"Sam", title:"Engineer", email:"me@me.com", id: 1});
        })
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
            })
            it("should increment the id# with each new Employee", () =>{
                //give 3 employees
                var e1 = new Employee("Sam", "Engineer","me@me.com")
                var e2 = new Employee("Vader", "Manager","vader@deathstar.org")
                var e3 = new Employee("Kylo", "Intern","kylo@deathstar.org")
                //expect employee 1 to be #0
                expect(e1.id).toEqual(0)
                //expect employee 2 to be #1
                expect(e2.id).toEqual(1)
                //expect employee 3 to be #2
                expect(e3.id).toEqual(2)
            })
        })
        //getTitle()
        describe("getName", ()=>{
            it("should return name value", () => {
                var employee = new Employee("Sam", "Engineer","me@me.com");
                expect()
            })
        })
        //getId()
        describe("getName", ()=>{
            it("should return name value", () => {
                var employee = new Employee("Sam", "Engineer","me@me.com");
                expect()
            })
        })
        //getEmail()
        describe("getName", ()=>{
            it("should return name value", () => {
                var employee = new Employee("Sam", "Engineer","me@me.com");
                expect()
            })
        })
        //getRole()
