// function add(a,b){
//return a + bar; 
//}


// Arrow function syntax
const add = (a, b) => {
    return a + b;
    
};

console.log(add(7, 8));

// Implicit Return is a shorter way of using arrow functions
const subtract = (a, b) => (a -b);
console.log(subtract(7, 1));

// Can leave off () with a single param
const double = a => a * 2
console.log(double(25));

// Returning an object
const createObj = () => ({
    name: 'Brad',
});

console.log(createObj());

// Array functions
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (n){
    console.log(n)
});



// Shorter way to create array functions
numbers.forEach((n) => console.log(n));
