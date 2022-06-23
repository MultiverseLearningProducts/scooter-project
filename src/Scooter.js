class Scooter{
  constructor(station, user){
    this.station = station;
    this.user = user;
  }

  station = this.station;
  user = this.user;
  serial = Math.floor(Math.random() * 1000) + 1;
  charge = Math.floor(Math.random() * 100) + 1;
  isBroken = false;
  docked = true;

  rent(){
    if(this.isBroken === false && this.charge > 20){
      console.log('Enjoy the ride!');
    }else if(this.charge <= 20){
      throw new Error('Scooter low on battery, please charge.');
    }else{
      throw new Error('Scooter is broken, please send a repair request.');
    }
  }

  dock(station){
    if(!station){
      throw new Error('Docking station required!');
    }else{
      this.station = station;
      this.docked = true;
      this.user = '';
    }
  }

  async charge() {
    console.log('Starting charge');

    await new Promise(resolve => setTimeout(resolve, 2000)); // wait 2 seconds
    this.charge = 100

    console.log('Charge complete');   
 }

}


module.exports = Scooter
