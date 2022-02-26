class Employee {
  constructor(name, designation, salary, birthdate) {
    this.name = name;
    this.designation = designation;
    this.salary = salary;
    this.birthdate = birthdate;
  }
}

const obj = new Employee("Vinay", "intern", 15000, "10 oct");
console.log(obj.designation);

//Manager class derived from base class Employee
class Manager extends Employee {
  constructor(name, designation, work) {
    super(name, designation);
    this.work = work;
  }
}
const manager1 = new Manager('rohan','coder','backend')
console.log(manager1.designation);

//helper class derived from base class Employee
class Helper extends Employee {
  constructor(name, designation, office) {
    super(name, designation);
    this.office = office;
  }
}
const helper1 = new Helper('rohit','helper','bhadohi')
console.log(helper1.office);

//Clark class derived from base class Employee
class Clark extends Employee {
  constructor(name, designation, address) {
    super(name, designation);
    this.address = address;
  }
}
const clark1 = new Helper('rohit','Clark','varanasi')
console.log(clark1.designation);
