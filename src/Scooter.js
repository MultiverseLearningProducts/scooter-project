class Scooter {
  // scooter code here
  #user;
  constructor(station, user, serial, nextSerial, charge, isBroken) {
    this.station = station;
    this.#user = user;
    this.serial = serial;
    this.nextSerial = nextSerial;
    this.charge = charge;
    this.isBroken = isBroken;
  }
  rent(user) {
    if (this.charge > 20 && !this.isBroken) {
      this.#user = user;
      return "Scooter successfully checked out!";
    } else {
      throw new Error("Scooter needs to charge or scooter needs repair.");
    }
  }
  dock(station) {
    this.#user = null;
    this.station = station;
    return "Scooter successfully returned!";
  }
}

module.exports = Scooter;
