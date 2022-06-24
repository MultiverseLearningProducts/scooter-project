const { TestWatcher } = require('jest')
const User = require('../src/User')

describe('User class', () => {
    test('Creates a new User with correct properties', () => {
        const user = new User('GuppyForLife', 'Mjkay8', 19);
        expect(user.username).toBe('GuppyForLife');
        expect(user.password).toBe('Mjkay8');
        expect(user.age).toBe(19);
    })
})