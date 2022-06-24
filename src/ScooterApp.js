const User = require('./User');
const Scooter = require('./Scooter');

class ScooterApp {
  static scooterSessions = [];
  
  constructor(){
    this.stations = {
      Manhattan: [],
      Brooklyn: [],
      Queens: [],
      Bronx: [],
      StatenIsland: []
    };
    this.registeredUser = {};
    this.constructor.scooterSessions.push(this);
}

  register(user){
    if(user.username in this.registeredUser){
      console.log('already registered!');
    }else if(user.age < 17){
      console.log('too young to register!');
    }else{
      this.registeredUser[user.username] = { password: user.password, age: user.age, loggedIn: false, accountChange: 0 };
      console.log('user has been registered.');
    }
  }

  login(username, password){
    if(username in this.registeredUser){
      if(password === this.registeredUser[username].password){
        this.registeredUser[username].loggedIn = true;
        console.log('user has logged in successfully');
      }else{
        throw new Error('Username or password is incorrect.');
      }
    }else{
      throw new Error('Username or password is incorrect.');
    }
  }

  addScooter(location, scooter){
    scooter.location = location;
    this.stations[location].push(scooter);
  }

  removeScooter(scooterToRemove) {
    const serial = scooterToRemove[0].serial
    let targetScooterArray = this.stations[scooterToRemove[0].station];
    let idx = -1;

    targetScooterArray.find((scooter, i) => {
      if (scooter.serial === serial) {
        idx = i;
      }
    });
    targetScooterArray.splice(idx, 1);
  }
}

module.exports = ScooterApp
