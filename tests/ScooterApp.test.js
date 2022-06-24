const Scooter = require('../src/Scooter');
const User = require('../src/User');
const ScooterApp = require('../src/ScooterApp');

describe('Scooter App Class', () => {
    const user1 = new User('GuppyForLife', 'Mj679e', 25);
    const scooterApp1 = new ScooterApp();
    const scooter = new Scooter('Queens', user1);
    test('register method in scooter app class', () => {
        const registered = scooterApp1.register(user1);
        const expectedResult = { password: 'Mj679e', age: 25, accountChange: 0, loggedIn: false };
        const actualResult = scooterApp1.registeredUser['GuppyForLife'];
        expect(expectedResult).toEqual(actualResult);
    });
    test('login user method in scooter app class', () => {
        const logInUser = scooterApp1.login(user1.username, user1.password);
        expect(scooterApp1.registeredUser['GuppyForLife'].loggedIn).toBe(true);
    });
    test('addScooter method in scooter app class', () => {
        const addScooter = scooterApp1.addScooter('Brooklyn', scooter);
        expect(scooter.location).toBe('Brooklyn');
        expect(scooterApp1.stations['Brooklyn']).toEqual([scooter]);
    })
});