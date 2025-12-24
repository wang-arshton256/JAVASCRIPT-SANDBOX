let x;
//Using array LIteral Method to declare arrays
const numbers = [25, 30, 89, 74, 58];

//Using array constructor

const fruits = new Array(25, 96, 'Apple', 45, 36);

x = numbers[0];
x = numbers[0] + numbers[3];
x = `my favourate friit is an ${fruits[2]}`;
x = numbers.length;
fruits[2] = 'pear' // Assigning new value to index 2 in the numbers array
//fruits[fruits.lenght] = 'blueberry'; // Adding value to last index of the array, use .lenght attribute
fruits[3] = 'From Uganda';

fruits[fruits.length] = 'Watermelon'; //Using .length atribut to modify array by adding data to last index.

console.log(fruits);
console.log(x);