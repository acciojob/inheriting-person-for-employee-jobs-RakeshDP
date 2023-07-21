// complete this js code
function Person(name, age) {
	
}
Person.prototype.greet = function greet(name,age){
	console.log(Hello, my name is ${name}, I am ${age} years old.)
}

function Employee(name, age, jobTitle) {
	
}
Employee.prototype.jobGreet = function jobGreet(name, age, jobTitle){
	console.log(Hello, my name is ${name}, I am ${age} years old, and my job title is ${jobTitle}.);
}
Person.prototype.__proto__ = Employee.prototype;


// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
