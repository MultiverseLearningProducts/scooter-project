class User {
  #username;
  #password;
  #age;
  constructor(userName, password, age) {
    this.#username = userName;
    this.#password = password;
    this.#age = age;
    this.loggedIn = false;
  }
  login(password) {
    if (this.#password === password) {
      return "Successfully logged in";
    } else {
      throw new Error("Incorrect Password");
    }
  }
  logout() {
    this.loggedIn = false;
    return "Successfully logged out";
  }

  // User code here
}

module.exports = User;
