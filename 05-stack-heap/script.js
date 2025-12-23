//These aree stored in the stack
//Examples of  primitive data types: Stringd , boolean, numbers, Null, Undefined, symbol, BigInt

const name = 'John';
const age = 30;

//These are stored on the heap
//Examples of reference data types: Arrays, functions,objects
const person = {
    name: 'Brad',
    age: 40,
};

let newName = name;
newName = 'Wangutusi';

let newPerson = person;
newPerson.name = 'Bradley';

console.log(name, newName);
console.log(person, newPerson);



