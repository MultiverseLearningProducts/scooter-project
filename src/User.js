class User {
  constructor(username, password, age){
    this.username = username;
    this.password = password;
    this.age = age;
  }

  username = this.username;
  password = this.password;
  age = this.age;

}

module.exports = User
