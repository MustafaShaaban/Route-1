// Prototype object

let Person = function (pName, pAge, pSalary, pGender, oldFriends) {
	(this.name = pName),
		(this.age = pAge),
		(this.gender = pGender),
		(this.salary = pSalary),
		(this.oldFriends = oldFriends);
};

Person.prototype.welcome = function () {
	console.log('hello');
};

let p1 = new Person('Ahmed', 13, 3000, 'male', ['sayed', 'hima']);
let p2 = new Person('Mai', 23, 3000, 'female', ['aya', 'mai']);
let p3 = new Person('eslam', 33, 3000, 'male', ['hany', 'tariq']);

// class object

class Person {
	constructor(pName, pAge, pSalary, pGender, oldFriends) {
		(this.name = pName),
			(this.age = pAge),
			(this.gender = pGender),
			(this.salary = pSalary),
			(this.oldFriends = oldFriends);
	}
	welcome() {
		console.log('hello');
	}
}

let Doctor = function (name, age, department, degree, price) {
	(this.name = name),
		(this.age = age),
		(this.department = department),
		(this.degree = degree),
		(this.price = price);
};

Doctor.prototype.price = function () {
	console.log(`Price is ${doctor.price}`);
};

// prototyp test

let latpTop = function (company, model, Hd, ram, cpu, display, gpu) {
	this.company = company;
	this.model = model;
	this.Hd = Hd;
	this.ram = ram;
};

latpTop.prototype.open = function () {
	console.log('welcome to my window');
};

class lapTop2 {
	constructor(company, model, Hd, ram) {
		this.company = company;
		this.model = model;
		this.Hd = Hd;
		this.ram = ram;
	}
	
}
