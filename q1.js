"use strict";

let person = {
    name: '',
    dateOfBirth: '',
    getName: function() {
        return this.name
    },
    setName: function(newName) {
        this.name = newName
    }
}

let john = Object.create(person);
john.setName('John');
john.dateOfBirth = '1998-12-10';
console.log(`The person’s name is ${john.getName()}`)
console.log(`${john.getName()} was born on ${john.dateOfBirth}`)
