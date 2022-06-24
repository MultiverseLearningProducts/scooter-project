const User = require('./User.js')
const Scooter = require('./Scooter.js')

class ScooterApp {
  static scooterSessions = [];
  constructor() {
    this.stations = {
      'Manhattan': [],
      'Brooklyn': [],
      'Queens': [],
      'Bronx': [],
      'StatenIsland': []
    }
    this.registeredUsers = {};
    // Each time a ScooterApp object is created/instantiated, it should automatically be added to the scooterSessions array (advanced)
    // this.constructor.scooterSessions = []
  };

  register(user) {
    if (user in this.registeredUsers) {
      console.log('Already registered!');
    }

    if (user.age <= 17) {
      console.log('Too young to register!');
    }

    if (!(user in this.registeredUsers) && user.age > 17) {
      this.registeredUsers[user.username] = 
      {
        'password': user.password,
        'age': user.age,
        'loggedIn': false,
        'accountChange': 0
      }
      console.log('User has been registered');
    }
  };

  logIn(username, password) {
    if (username in this.registeredUsers) {
      if (password === this.registeredUsers[username].password) {
        this.registeredUsers[username].loggedIn = true;
      }
      else {
        throw Error('Username of password is incorrect.');
      }
      console.log('User logged in successfully!');
    }
  };

};

module.exports = ScooterApp
