const Scooter = require('../src/Scooter')
const User = require('../src/User')

class ScooterApp {
  constructor () {
    this.stations = {
      'Station A': [],
      'Station B': [],
      'Station C': []
    }
    this.registeredUsers = {}
  }

  registerUser (username, password, age) {
    if (this.registeredUsers[username]) {
      throw new Error('User already registered')
    }
    if (age < 18) {
      throw new Error('User must be at least 18 years old to register.')
    }
    const user = new User(username, password, age)
    this.registeredUsers[username] = user
    console.log('User has been registered')

    return user
  }

  loginUser (username, password) {
    const user = this.registeredUsers[username]

    if (!user) {
      throw new Error('Username not found')
    }

    user.login(password)
    console.log('User has been logged in')
  }

  logoutUser (username) {
    const user = this.registeredUsers[username]

    if (!user) {
      throw new Error('no such user is logged in')
    }

    user.logout()
    console.log('User is logged out')
  }

  createScooter (station) {
    const scooter = new Scooter(station)
    this.stations[station].push(scooter)
    console.log('Created new scooter')

    return scooter
  }

  dockScooter (scooter, station) {
    const spesifStation = this.stations[station]

    if (!spesifStation) {
      throw new Error('no such station')
    }
    if (spesifStation.includes(scooter)) {
      throw new Error('scooter already at station')
    }

    spesifStation.push(scooter)
    console.log('Scooter is docked')
  }

  rentScooter (scooter, user) {
    if (scooter.user) {
      throw new Error('Scooter already rented')
    }

    for (const station in this.stations) {
      const index = this.stations[station].includes(scooter)
      if (index !== -1) {
        this.stations[station].slice(index, 1)
        console.log('Scooter is rented')
      }
    }

    scooter.rent(user)
  }

  print () {
    console.log('Registered Users:')
    for (const user in this.registerUser()) {
      console.log(`- ${user}`)
    }

    console.log('\nStations and Scooters:')
    for (const station in this.stations) {
      console.log(`- ${station}: ${this.stations[station].length} scooter(s)`)
    }
  }
}

module.exports = ScooterApp
