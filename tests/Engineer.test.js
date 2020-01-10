const Engineer = require('../js/engineer.js');

//what are we testing:
describe("Engineer", () => {
    //when it initializion..
    describe("init", () => {
        // get a github key and value
        it("should get github key and value", () => {
            var engineer = new Engineer("Sam", "Engineer", "me@me.com",1,"skuttenkuler")
            expect(engineer.getGithub()).toEqual("skuttenkuler")
        })
    })
    //getRole()
    describe("getRole", () => {
        it("should return Engineer string", () => {
            var engineer = new Engineer("Sam", "Engineer", "me@me.com",1,"skuttenkuler")
            expect(engineer.getRole()).toEqual("Engineer");
        })
    })

})
    