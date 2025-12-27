let x;

const person = {
    name: 'Wangutusi',
    age: 25,
    address: 'Kampala',
    hobbies: ['swimming', 'skating'],
    isMarried: true,
};

x = person.name = 'Justus';
person.hobbies.push('cooking');

person.greet = function () {
    console.log(`Hello world, my name is ${this.name}`);
}
person.greet();
console.log(person);
    

