function sayHello() {
    console.log('Hello World');
}

sayHello(); // Invoking a function

function addNumbers(num1, num2){ // Declaring a  function
    console.log(num1 + num2);
}

addNumbers(50, 10); // Invoking a function

function subtractNumbers(num1, num2) {
    return num1 - num2;
}

const result = subtractNumbers(50, 10); // You can declare a variable to return the result and the log it.
console.log(result);

// You can also log the fuction directly
//console.log(subtractNumbers(50, 10)) & get the same result.


function area(length, width) {
    return length * width;
}

const areaCovered = area(140, 10);

console.log(areaCovered);
