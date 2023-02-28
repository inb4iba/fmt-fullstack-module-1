const isAdult = (age) => age >= 18;
console.log(isAdult(16));
console.log(isAdult(19));
console.log("\n");

// --------------------------------------------

const sum = (a, b) => a + b;
console.log(sum(4, 6));
console.log("\n");

// --------------------------------------------

class Person {
  name;

  constructor(name) {
    this.name = name;
  }

  print() {
    setTimeout(function () {
      console.log("normal", this.name, this);
      console.log("\n");
    }, 100);
  }

  printArrow() {
    setTimeout(() => console.log("arrow", this.name, this), 100);
  }
}

const person = new Person("Icaro");
person.print();
person.printArrow();
console.log("\n");

// --------------------------------------------

const personObj = {
  name: "Icaro",
  printArrow: () => console.log("arrow", this.name, this),
  print() {
    console.log("normal", this.name, this);
    console.log("\n");
  },
};

personObj.print();
personObj.printArrow();
