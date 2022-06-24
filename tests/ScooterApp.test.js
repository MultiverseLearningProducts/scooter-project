const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

// ScooterApp tests here
describe('scooter app test', () => {
    const scooterApp = new ScooterApp();
    const user = new User('username', 'password123!@#', 26);
    // register user
    test('user is registered', () => {
        const registered = scooterApp.register(user);
        expect(scooterApp.registeredUsers['username']).toEqual({ password: 'password123!@#', age: 26, loggedIn: false, accountChange: 0 });
    })
    // log in
    test('check if user is logged in', () => {
        const registered = scooterApp.register(user);
        expect(scooterApp.registeredUsers['username'].loggedIn).toBe(false);
    })
    // add scooter

    // remove scooter
});