const Scooter = require("../src/Scooter");
const User = require("../src/User");

// typeof scooter === object
describe("scooter object", () => {
  test("Scooter class should create Scooter instance", () => {
    const scooter = new Scooter("Green Park", "George1", 1234, 1, 55, false);
    expect(scooter).toBeInstanceOf(Scooter);
  });
});

// Method tests
// tests here!
// rent method
test("Should throw error if scooter needs charging or is broken", () => {
  const scooter = new Scooter("Green Park", null, 1234, 1, 15, false);
  const user1 = new User("George1");
  expect(() => {
    scooter.rent(user1);
  }).toThrow("Scooter needs to charge or scooter needs repair.");
});

test("Should check out scooter successfully if conditions are met", () => {
  const scooter = new Scooter("Green Park", null, 1234, 1, 55, false);
  const user1 = new User("George1");
  const response = scooter.rent(user1);
  expect(response).toBe("Scooter successfully checked out!");
});

// dock method
test("Test that dock method works", () => {
  const scooter = new Scooter("Green Park", null, 1234, 1, 55, false);
  //const stationName = "Green Park";
  expect(scooter.dock()).toBe("Scooter successfully returned!");
});
// requestRepair method
// charge method
