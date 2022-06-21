function Employee(name = '', id = '', email = '', role ='') {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
};

Employee.prototype.getName = function() {
    return `${this.name}`;
};

Employee.prototype.getId = function() {
    return `${this.id}`;
};

Employee.prototype.getEmail = function() {
    return `${this.email}`;
};

Employee.prototype.getRole = function() {
        return 'employee';
};
module.exports = Employee;