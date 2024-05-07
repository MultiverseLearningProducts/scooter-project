const Scooter = require('../src/Scooter')

// typeof scooter === object
describe('scooter object', () => {
  test('Scooter class should create Scooter instance', () => {
    const scooter = new Scooter()
    expect(scooter).toBeInstanceOf(Scooter)
  })
})

// Method tests
describe('scooter methods', () => {
  let scooter

  beforeEach(() => {
    scooter = new Scooter('Station A') // Create a new scooter instance before each test
  })

  test('Scooter instance should have default properties', () => {
    expect(scooter.station).toBe('Station A')
    expect(scooter.user).toBeNull()
    expect(scooter.serial).toBeDefined()
    expect(scooter.charge).toBe(100)
    expect(scooter.isBroken).toBe(false)
  })

  test('rent method should set user and clear station', () => {
    const user = { username: 'testUser' }
    scooter.rent(user)
    expect(scooter.user).toBe(user)
    expect(scooter.station).toBeNull()
  })

  test('rent method should throw error if charge is too low', () => {
    scooter.charge = 10
    expect(() => { scooter.rent({}) }).toThrowError('scooter needs to charge or scooter needs repair')
  })

  test('rent method should throw error if charge is too low or scooter is broken', () => {
    scooter.charge = 10
    scooter.isBroken = true
    expect(() => {
      scooter.rent({})
    }).toThrowError('scooter needs to charge or scooter needs repair')
  })

  test('dock method should set station and clear user', () => {
    scooter.user = { username: 'testUser' }
    scooter.dock('Station B')
    expect(scooter.station).toBe('Station B')
    expect(scooter.user).toBeNull()
  })

  test('recharge method should recharge the scooter', async () => {
    scooter.charge = 50
    await scooter.recharge()
    expect(scooter.charge).toBe(100)
  })

  test('requestRepair method should set isBroken to false after a delay', async () => {
    await scooter.requestRepair()
    expect(scooter.isBroken).toBe(false)
  }, 5000)
})
