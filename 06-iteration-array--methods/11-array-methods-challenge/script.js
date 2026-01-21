
// Example with a cart
const people = [
    { firstName: 'John', lastName: 'Dog', email: 'wangarshton@gmail.com', phone: +256779252525, age: 30, },
    { firstName: 'Peter', lastName: 'ONe', email: 'peter@gmail.com', phone: +2568892525, age: 25, },
    { firstName: 'Cynthia', lastName: 'Mimz', email: 'cynthia@gmail.com', phone: +256779252585, age: 22, },
    { firstName: 'Sam', lastName: 'OLax', email: 'sam@gmail.com', phone: +2567792525785, age: 18, },
    { firstName: 'Baker', lastName: 'Jasse', email: 'baker@gmail.com', phone: +2567799952525, age: 36, },
    { firstName: 'Luke', lastName: 'Anve', email: 'luke@gmail.com', phone: +256779255588, age: 7, },
   
];

// Using shorter version
//const total2 = cart1.reduce((acc, product) => acc + product.price, 0);
//console.log(total2);

const youngPeople = people
    .filter((people) => people.age <= 25,)
    .map((people) => ({
        name: people.firstName + '' + people.lastName,
        email: people.email,
    }))
console.log(youngPeople);

// Challenge 2:
// Add all of the positive numbers in the array
const numbers = [2, -30, 50, 20, -12, -9, 7];

const sumOfPositives = numbers
  .filter(number => number > 0)
    .reduce((sum, current) => sum + current, 0)
console.log(sumOfPositives);
  

// Create a new array called capitalizedWords with the words from the words array with the first letter of each word capitalized.

const words = ['coder', 'programmer', 'developer'];

const capitalizedWords = words.map(word => {   
    const lowerCaseWord = word.toLowerCase(); // Ensure the entire word (except the first letter) is in lowercase
    const firstLetter = lowerCaseWord.charAt(0).toUpperCase();  // Capitalize the first letter
    const restOfWord = lowerCaseWord.slice(1); // Get the rest of the word
    return firstLetter + restOfWord; // Combine them

});

// Shorter version
// const capitalizedWordsConcise = words.map(word => 
//  word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
// );

console.log(capitalizedWords);