const Intern = require('../js/intern.js');

//what are we testing:
describe("Intern", () => {
    //when it initializion..
    describe("init", () => {
        // get a github key and value
        it("should get school key and value", () => {
            var intern = new Intern("Jeff", "Intern", "jeff@jeffy.com",1,"MTSU")
            expect(intern.getSchool()).toEqual("MTSU")
        })
    })
    //getRole()
    describe("getRole", () => {
        it("should return Intern string", () => {
            var intern = new Intern("Jeff", "Intern", "jeff@jeffy.com",1,"MTSU")
            expect(intern.getRole()).toEqual("Intern");
        })
    })

})
    