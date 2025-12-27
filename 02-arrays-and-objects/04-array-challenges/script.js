
const numbers = [1, 2, 3, 4, 5];

numbers.unshift(0);
numbers.push(6);
const arr = [].concat(numbers).reverse();

console.log(arr);

// Challenge 2
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];

const arr3 = arr1.concat(arr2);
console.log(arr3);
