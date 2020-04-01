"use strict";

function Person(name, dateOfBirth) {
    this.name = name;
    this.dateOfBirth = dateOfBirth;
    this.toString = function() {
        console.log(`The person’s name is ${this.name}`)
        console.log(`${this.name} was born on ${this.dateOfBirth}`)
    }
}

let p1 = new Person('John', '1998-12-10')
p1.toString();

let p2 = new Person('Peter', '1985-11-10')
p2.toString();

