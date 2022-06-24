class Scooter {
  constructor(station, user) {
    this.station = station;
    this.user = user;
    this.serial = Math.floor(Math.random() * 1001);
    this.charge = Math.floor(Math.random() * 101);
    this.isBroken = false;
    this.docked = true;
  };

  rent() {
    if (!(this.isBroken = false && this.charge > 20)) {
      this.docked = false;
      console.log('Enjoy your ride!');
    }
    else if (this.charge < 20) {
      throw Error('Scooter low on battery, please charge.');
    }
    else {
      throw Error('Scooter is broken, please send a repair request.');
    }
  };

  dock(station) {
    this.station = station
    this.docked = true;
    this.user = '';

    if (station = null) {
      throw Error('Docking station is required!');
    }
  };

  async recharge() {
    console.log('Charging...')

    await new Promise(resolve => {
      setTimeout(resolve, 1000)
      this.charge = 100
    })

    console.log('Scooter has been fully charged')
  };

  requestRepair() {
    console.log('Thank you for the repair request')

    setTimeout(() => {
      console.log('Charging...')
    }, 2000)

    this.isBroken = false
    console.log('Repairs are complete')
  };

};

module.exports = Scooter