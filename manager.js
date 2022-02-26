const Employee = require('../employee');

//Manager class derived from base class Employee
class Manager extends Employee {
    constructor(name, designation, work) {
      super(name, designation);
      this.work = work;
    }
  }
  manager2 = new Manager('pradnya','manager','fullstack')
  console.log(manager1.designation);