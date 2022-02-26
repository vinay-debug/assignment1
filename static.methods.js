class student {
    constructor(name,marks) {
      this.name = name;
      this.marks = marks;
    }
    static hello(x) {
      return ("Hello " + x.name+ ". Your marrks is " + x.marks);
    }
  }

  const obj = new student('rohan', 85);
  console.log(student.hello(obj))