const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

// ScooterApp tests here
describe('scooterApp tests', () => {
    // register user
    test('User gets registered', () => {
      let scooterApp1 = new ScooterApp();
      let user1 = new User("user1", "123", 20);
      let register1 = scooterApp1.register(user1);
      let expectedResult = {
        'password': "123",
        'age': 20,
        'loggedIn': false,
        'accountCharge': 0
      };
      let actualResult = scooterApp1.registeredUsers['user1'];
      expect(actualResult).toEqual(expectedResult);
    });
    // log in test
    test('User can log in', () => {
        let scooterApp1 = new ScooterApp();
        let user1 = new User("user1", "123", 20);
        let register1 = scooterApp1.register(user1);
        let expectedResult = {
          'password': "123",
          'age': 20,
          'loggedIn': false,
          'accountCharge': 0
        };
        let actualResult = scooterApp1.registeredUsers['user1'];
        expect(actualResult).toEqual(expectedResult);
      });

      // add scooter

      // remove scooter
});
