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

const {
    id: todoId, // simply adding values like to a variable is renaming and not distructuring.
    title,
    user: { name }, // Using the cally brackets means destructuring.
} = todo;

console.log(id, title);

// Destructuring arrays
const numbers = [25, 35, 85, 79, 68];

const [first, second] = numbers; // Destructure by passing the first and second numbers, you can use the REST operator to log the remaining values in the array.
const [first, second, ...rest] = numbers; // You can use the REST operator to log the remaining values in the array.

console.log(fisrt, second, rest);

