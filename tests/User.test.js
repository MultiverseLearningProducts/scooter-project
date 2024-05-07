const User = require('../src/User')

const user = new User('Joe Bloggs', 'test123', 21)

// User tests here
describe('User property tests', () => {
  // test username
  test('username should be a string', () => {
    expect(typeof user.username).toBe('string')
  })

  test('password should be a string', () => {
    expect(typeof user.password).toBe('string')
  })

  test('age should be a number', () => {
    expect(typeof user.age).toBe('number')
  })
})

describe('User method tests', () => {
  let user

  beforeEach(() => {
    user = new User('Joe Bloggs', 'test123', 21)
  })

  // Test login
  test('login with correct password should set loggedIn to true', () => {
    user.login('test123')
    expect(user.loggedIn).toBe(true)
  })

  test('login with incorrect password should throw an error', () => {
    expect(() => {
      user.login('wrongpassword')
    }).toThrow('Incorrect password')
  })

  // Test logout
  test('logout should set loggedIn to false', () => {
    user.login('test123')
    user.logout()
    expect(user.loggedIn).toBe(false)
  })
})
