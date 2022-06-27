const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
	static scooterSessions = [];
	constructor(){
		ScooterApp.scooterSessions.push(Scooter);
		this.stations = {
			'Manhattan': [], 
			'Brooklyn': [], 
			'Queens': [], 
			'Bronx': [], 
			'StatenIsland': []
		}
		this.registeredUsers = {};

		this.constructor.scooterSessions.push(this);
	}

	register(user){
		if(user in this.registeredUsers){
			console.log("already registered!");
		}

		if(user.age <= 17){
			console.log("too young to register!");
		}

		if(!(user in this.registeredUsers) && user.age > 17){
			this.registeredUsers[user.username] = {
				'password': user.password,
				'age': user.age,
				'loggedIn': false,
				'accountCharge': 0
			}
			console.log('user has been registered');
		}
	}

	logIn(username, password){
		if(User in this.registeredUsers && password === this.registeredUsers[username].password){
			this.registeredUsers[username].loggedIn = true;
			console.log(`${username} has logged in successfully.`);
		} else {
			throw new Error('Username or password is incorrect.');
		}
	}

	addScooter(location, scooter){
		scooter.station = location;
		this.stations.location.push(scooter);
	}

	removeScooter(scooterToRemove){
		let serialNumber = scooterToRemove.serial;

	}
}

module.exports = ScooterApp
