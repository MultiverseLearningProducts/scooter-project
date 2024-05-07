const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

// ScooterApp tests here

describe('ScooterApp method tests', () => {
  let scooterApp
  let user

  beforeEach(() => {
    scooterApp = new ScooterApp()
    user = scooterApp.registerUser('Joe Bloggs', 'test123', 21)
  })

  test('registerUser method should return instance of User', () => {
    expect(user).toBeInstanceOf(User)
  })

  test('loginUser method should log in a registered user', () => {
    scooterApp.loginUser('Joe Bloggs', 'test123')
    expect(user.loggedIn).toBe(true)
  })

  test('logoutUser method should log out a logged in user', () => {
    scooterApp.loginUser('Joe Bloggs', 'test123')
    scooterApp.logoutUser('Joe Bloggs')
    expect(user.loggedIn).toBe(false)
  })

  test('createScooter method should create a new scooter at the specified station', () => {
    const station = 'Station A'
    const scooter = scooterApp.createScooter(station)
    expect(scooter.station).toBe(station)
    expect(scooterApp.stations[station]).toContain(scooter)
  })

  test('dockScooter method should dock a scooter at the specified station', () => {
    const station = 'Station A'
    const scooter = scooterApp.createScooter(station)
    const newStation = 'Station B'
    scooterApp.dockScooter(scooter, newStation)
    expect(scooter.station).toBe(station)
    expect(scooterApp.stations[newStation]).toContain(scooter)
  })

  test('rentScooter method should rent a scooter to a user', () => {
    const station = 'Station A'
    const scooter = scooterApp.createScooter(station)
    scooterApp.rentScooter(scooter, user)
    expect(scooter.user).toBe(user)
    expect(scooter.station).toBe(null)
  })
})
