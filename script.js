// // complete this js code
// function Person(name, age) {
// 	this.name=name;
// 	this.age=age;
// }
// Person.prototype.greet = function(){
// 	console.log(Hello, my name is ${this.name}, I am ${this.age} years old.)
// }

// function Employee(name, age, jobTitle) {
// 	Person.call(this,name,age);
// 	this.jobTitle=jobTitle;
// }
// Employee.prototype = Object.create(Person.prototype);

// Employee.prototype.constructor = Employee;

// Employee.prototype.jobGreet = function(){
// 	console.log(Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.)
// }

// Person constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Adding the greet method to the Person prototype
Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
}

// Employee constructor function inheriting from Person
function Employee(name, age, jobTitle) {
  // Call the Person constructor using the Employee context
  Person.call(this, name, age);
  this.jobTitle = jobTitle;
}

// Inherit the Person prototype into the Employee prototype
Employee.prototype = Object.create(Person.prototype);

// Set the Employee constructor correctly
Employee.prototype.constructor = Employee;

// Adding the jobGreet method to the Employee prototype
Employee.prototype.jobGreet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
}



// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
