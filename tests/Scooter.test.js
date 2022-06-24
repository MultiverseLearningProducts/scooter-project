const Scooter = require('../src/Scooter')
const User = require('../src/User')

//typeof scooter === object
describe('scooter object', () => {
  test('scooter is equal to object', () => {
    const scooter = new Scooter('Queens');
    expect(typeof scooter).toEqual('object');
  }
  )
});

//Method tests
describe('scooter method tests', () => {
  // tests here!

  //rent method
  test('scooters can be rented', () => {
    const newScooter = new Scooter('Queens');
    newScooter.rent();
    expect(newScooter.docked).toEqual(false);
  });
  //dock method
  test('station should be assigned to station property when docked, docked should be assigned as true', () => {
    const newScooter = new Scooter('Queens');
    newScooter.dock('Queens');
    expect(newScooter.user).toEqual('');
    expect(newScooter.docked).toBe(true);
    expect(newScooter.station).toBe('Queens');
  });
  //requestRepair method
    test('scooter.isBroken property should be false after repair', () => {
      const newScooter = new Scooter('Queens');
      newScooter.requestRepair();
      expect(newScooter.isBroken).toBe(false);
    })
  //charge method
    test('recharge method uses async and await', async () => {
      const newScooter = new Scooter();
      await newScooter.recharge();
      console.log('TEST COMPLETE')
      expect(newScooter.charge).toBe(100);
    })
});