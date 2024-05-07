class Scooter {
  static nextSerial = 1
  constructor (station) {
    this.station = station
    this.user = null
    this.serial = Scooter.nextSerial
    this.charge = 100
    this.isBroken = false

    Scooter.nextSerial++
  }

  rent (user) {
    if (this.charge > 20 && !this.isBroken) {
      this.user = user
      this.station = null
    } else {
      this.isBroken = true
      throw new Error('scooter needs to charge or scooter needs repair')
    }
  }

  dock (station) {
    this.user = null
    this.station = station
  }

  async recharge () {
    console.log('Starting recharge')
    await new Promise(resolve => setTimeout(resolve, 2000))
    this.charge = 100
    console.log('Recharge complete')
  }

  requestRepair () {
    console.log('Repair requested')
    setTimeout(() => {
      this.isBroken = false
      console.log('Repair completed')
    }, 5000)
  }
}

module.exports = Scooter
