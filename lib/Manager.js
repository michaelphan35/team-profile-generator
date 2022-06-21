const Employee = require('./Employee');

class Manager extends Employee {
    constructor (name, id, email) {
        super(name, id, email);
        this.officeNumber = Math.floor(Math.random()* 10 + 100);
    }

    getRole() {
        return "Manager";
    }

    getOfficeNumber() {
        return `${this.officeNumber}`;
    }
};

module.exports = Manager;