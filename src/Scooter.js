class Scooter{
  // scooter code here
  constructor(station, user){
    this.station = station;
    this.user = user;
    this.serial = Math.floor(Math.random() * 1000) + 1;
    this.charge = Math.floor(Math.random() * 100) + 1;
    this.isBroken = false;
    this.docked = true;
  }
  rent() {
    if(this.isBroken === false && this.charge > 20){
		this.docked = false;
		console.log('Enjoy the ride!');
    } else if (this.charge <= 20){
		throw new Error('Scooter low on battery, please charge.');
		
	} else {
		throw new Error('Scooter is broken, please send a repair request.');
	}
  }

  dock(station){
	if(!station){
		throw new Error("Docking station required!");
	} else {
		this.station = station;
		this.docked = true;
		this.user = "";
	}
  }

	async recharge() {

		console.log('Charging....')
		await new Promise(resolve => {
		  setTimeout(resolve, 1000)
		  this.charge = 100
		})
		console.log('scooter has been fully charged')
	  }

	  requestRepair() {

		console.log('Thank you for the repair request')
	
		setTimeout(() => {
		  console.log('charging...')
		}, 2000)
	
		this.isBroken = false
	
		console.log('Repairs are complete')
	  }

}


module.exports = Scooter
