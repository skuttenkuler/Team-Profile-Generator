const Manager = require('../js/manager.js');

//what are we testing:
describe("Manager", () => {
    //when it initializion..
    describe("init", () => {
        // get a github key and value
        it("should get office key and value", () => {
            var manager = new Manager("Jerome", "Manager", "jdog@j.com",1,315)
            expect(manager.getOfficeNumber()).toEqual(315)
        })
    })
    //getRole()
    describe("getRole", () => {
        it("should return Intern string", () => {
            var manager = new Manager("Jeff", "Intern", "jdog@j.com",1,315)
            expect(manager.getRole()).toEqual("Manager");
        })
    })

})
    