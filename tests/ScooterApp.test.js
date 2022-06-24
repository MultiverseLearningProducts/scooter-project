const Scooter = require('../src/Scooter');
const User = require('../src/User');
const ScooterApp = require('../src/ScooterApp');

describe('Scooter App Class', () => {
    const user1 = new User('GuppyForLife', 'Mj679e', 25);
    const scooter1 = new Scooter('Brooklyn', user1);
    test('register method in scooter app class', () => {
        const scooterApp1 = new ScooterApp();
        scooterApp1.register(user1);
    });
});