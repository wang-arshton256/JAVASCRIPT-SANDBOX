// Object literals (With object literals, you can create objects within other objects)

let x;

const beneficiary = {
    name: 'wang',
    age: 28,
    address: 'Muyenga',
    isAdmin: true,
    education: {
        kindergarten: 'Doctors club nursery school',
        primary: 'Kalinabiri primary school',
        scecondary: 'Kyambogo college school',
        University: 'Uganda christian university',
    },
    hobbies:['coding', 'swimming'],

}

x = beneficiary.name; 
x = beneficiary['age'];
x = beneficiary.hobbies[0]; // accessing array inside object
x = beneficiary.education.University; // accessing object inside object
delete beneficiary.isAdmin; //deleting object property
console.log(x);

// Modifying object properties
beneficiary.age = 29;
beneficiary.address = 'Kampala';
beneficiary.name = 'Wangutusi';
beneficiary.hasChilren = true; // adding new property to object;
console.log(beneficiary);

beneficiary.children = ['Elisha', 'Salva']; // adding new array property to object
beneficiary.spouse = 'Tasha';
beneficiary.isMarried = true;
beneficiary.children.push('Zoe'); // adding new element to array inside object


// Creating a function and using this keyword to access the name property.
beneficiary.greet = function () {
    console.log(`Hello World, my name is ${this.name}`)
};

beneficiary.greet();
console.log(beneficiary);

