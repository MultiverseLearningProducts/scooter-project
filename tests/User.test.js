const { TestWatcher } = require('jest');
const User = require('../src/User')

// User tests here
// test username
describe("Can instantiate User object correctly", function() {
    test("Instantiate correct username", function (){
        let user1 = new User("admin", "pass123", 25);
        expect(user1.username).toBe("admin");
    });
    // test password
    test("Instantiate correct password", function (){
        let user1 = new User("admin", "pass123", 25);
        expect(user1.password).toBe("pass123");
    });
    // test age
    test("Instantiate correct age", function (){
        let user1 = new User("admin", "pass123", 25);
        expect(user1.age).toBe(25);
    })
});
