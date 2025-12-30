const firstName = 'John';
const lastName = 'Doe';
const age = 30;

// While naming variable with similar values,you can simply add them without adding the value;
const person = {
    firstName,
    lastName,
    age,

}

console.log(person.age);

// Destructuring while creating an object

const todo = {
    id: 1,
    title: 'Take out the trash',
}

const { id, title } = todo;

console.log(id, title);

