const User = require('./User')
const Scooter = require('./Scooter')

let stations = {
  "Chippenham": [],
  "Bath": [],
  "Bristol": []
}
let registeredUsers = {}
class ScooterApp {
  // ScooterApp code here
  constructor() {
    this.stations = stations
    this.registeredUsers =registeredUsers
  }
  registerUser(username, password, age){

  }
  loginUser(username, password) {

  }
  logoutUser(username) {

  }
  createScooter(station) {

  }
  dockScooter(scooter, station) {

  }
  rentScooter(scooter, user) {

  }
  print() {

  }
}

module.exports = ScooterApp
