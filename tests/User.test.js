const User = require('../src/User')

// User tests here
describe('user test', () => {
    test('user is equal to object', () => {
        const user = new User();
        expect(typeof user).toEqual('object');
    })
// test username
    test('username is equal to string', () => {
        const username = 'username';
        expect(typeof username).toEqual('string');
    })
// test password
    test('password is equal to string', () => {
        const password = 'password123!@#';
        expect(typeof password).toEqual('string');
    })
// test age
    test('age is equal to number', () => {
        const age = 18;
        expect(typeof age).toEqual('number');
    })
});