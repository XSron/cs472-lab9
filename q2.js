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

var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

let employee = {
    salary: 0,
    hiredDate: new Date(),
    __proto__: person,
    doJob: function(jobTitle) {
        console.log(`${this.getName()} is a ${jobTitle} who earns ${formatter.format(this.salary)}`)
    }
}

let anna = Object.create(employee);
anna.setName('Anna');
anna.salary = '249995.50';
anna.doJob('Programmer');