const User = require('./User');
const Scooter = require('./Scooter');

class ScooterApp {
  static scooterSessions = [];
  stations = {
    Manhattan: [],
    Brooklyn: [],
    Queens: [],
    Bronx: [],
    StatenIsland: []
  };
  registeredUser = {};

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

  removeScooter(scooterToRemove){
    const serialNumber = scooterToRemove.serial;
    
  }
}

module.exports = ScooterApp
