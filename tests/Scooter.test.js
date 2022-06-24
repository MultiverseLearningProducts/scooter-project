const Scooter = require('../src/Scooter');
const User = require('../src/User');

//typeof scooter === object
describe('scooter object', () => {
  test('verified if scooter is an object', () => {
    const scooter = new Scooter();
    expect(scooter && typeof scooter === 'object').toBe(true);
  });
});

//Method tests
describe('scooter methods', () => {
  test('the rent method of the Scooter object', () => {
    const scooter2 = new Scooter();
    scooter2.charge = 100;
    scooter2.isBroken = false;
    expect(scooter2.rent()).toBe(true);
  });
  test('the dock method of the scooter object', () => {
    const scooter3 = new Scooter('', 'GuppyForLife');
    scooter3.dock('Brooklyn');
    expect(scooter3.station).toBe('Brooklyn');
    expect(scooter3.docked).toBe(true);
    expect(scooter3.user).toBe('');
  });
  test('scooter.isBroken property should be false after repair', () => {
    const newScooter = new Scooter('Queens');
    newScooter.requestRepair();
    expect(newScooter.isBroken).toBe(false);
  });
  test('recharge method uses async and await', async () => {
    const newScooter = new Scooter();
    await newScooter.recharge();
    console.log('TEST COMPLETE')
    expect(newScooter.charge).toBe(100);
  });
});

