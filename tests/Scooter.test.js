const Scooter = require('../src/Scooter')
const User = require('../src/User')

let user1 = new User("user1", "123", 20);
let bird = new Scooter("Station1", user1);
//typeof scooter === object
describe('Scooter object', () => {
  test('Check if Scooter is an object', () => {
    // edit this to be a real test!
    expect(typeof bird).toEqual('object');
  });

});

//Method tests
describe('Scooter methods', () => {
  //rent method
  test('Check rent with charge over 20 and not broken', () => {
    if(bird.isBroken === false && bird.charge > 20){
      expect(bird.docked).toBe(false);
    }
  });

  test('Check rent with charge under 20 and not broken', () => {
    if(bird.charge <= 20){
      expect(bird.rent).toThrowError('Scooter low on battery, please charge.');
    }
  });

  test('Check rent with scooter broken', () => {
    if(bird.isBroken === true){
      expect(bird.rent).toThrow(Error);
    }
  });

  //dock method
  test('Check dock', () => {
    bird.dock(bird.station);
    expect(bird.docked).toBe(true);
  });

  //requestRepair method
  test('Request repair', () => {
    bird.isBroken = true;
    bird.requestRepair();
    expect(bird.isBroken).toBe(false);
  });

  //recharge method
  test('Recharge', () => {
    bird.recharge();
    expect(bird.charge).toBe(100);
  });
});
