//Classes in js

class User {

    constructor(userName, email, password) {
        this.userName = userName;
        this.email = email;
        this.password = password;

    }

    encrptPassword() {
        return `${this.password}abc123`;
    }
}

const chai = new User("chai", "abc@gmail.com", "123");

console.log(chai.encrptPassword());

