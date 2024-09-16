const Scooter = require("./Scooter");
const User = require("./User");

// require the User and Scooter classes - see where they can be used in ScooterApp.js

class ScooterApp {
  #username;
  #password;
  // ScooterApp code here
  constructor() {
    this.#username;
    this.#password;
    this.stations = {
      Station1: [],
      Station2: [],
      Station3: [],
    };
    this.registeredUsers = [];
  }
  registerUser(username, password, age) {
    const userExists = this.registerUser.some(
      (user) => user.username === username
    );
    if (userExists) {
      throw new Error("Already registered");
    }
    if (age < 18) {
      throw new Error("Too young to register");
    }
    const newUser = new User(username, password, age);
    this.registeredUsers.push(newUser);
    console.log("User has been registered");
    return newUser;
  }
  login(username, password) {
    console.log(username, password);
  }
}

module.exports = ScooterApp;
