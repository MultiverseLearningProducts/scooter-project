const User = require("../src/User");

const user = new User("Joe Bloggs", "test123", 21);

// User tests here
describe("User property tests", () => {
  // test username
  test("username should be a string", () => {
    const userName = "Joe Bloggs";
    expect(typeof userName).toBe("string");
  });
  // test password
  test("password should be a string", () => {
    const password = "test123";
    expect(typeof password).toBe("string");
  });
  // test age
  test("password should be a number", () => {
    const age = 21;
    expect(typeof age).toBe("number");
  });

  // test login
  test("test successful login", () => {
    const user = new User("Joe Bloggs", "test123", 21);
    const password1 = "test123";
    const response = user.login(password1);
    expect(response).toBe("Successfully logged in");
  });
  test("test incorrect login", () => {
    const user = new User("Joe Bloggs", "test123", 21);
    expect(() => {
      user.login().toThrow("Incorrect Password");
    });
  });

  // test logout
  test("test logout", () => {
    const user = new User("Joe Bloggs", "test123", 21);
    user.login("test123");
    const logoutMessage = user.logout();
    expect(logoutMessage).toBe("Successfully logged out");
    expect(user.loggedIn).toBe(false);
  });
});
