// Chalenge 1 Create a function called a getCelsuis() that 
// takes temperature in fahrenheit as an argument and returns the temperature in celsius

// function getCelsius(f) {
//    const celsius = ((f - 32) * 5) / 9;
//    return celsius;
//}

const getCelsius = (f) => ((f - 50) * 5) / 9;
console.log(`The temp is ${getCelsius(32)}\xB0C`)


// Challenge 2
// create an arrow function called minMax() which takes in an
// array of numbers and returns an object with the minimum and maximum numbers in the array.

// function minMax(arr) {
//    const min = Math.min(arr);
//    console.log(min);
// }

// minMax(1, 2, 3, 4, 7);

function minMax(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    return {
        min,
        max,
    };
}
console.log(minMax([1, 2, 3, 4, 5]));

// Challenge 3

// Create an IIFE that takes in the lenght and width of a rectangle, outputs it to the console 
// in a message as soon as the page loads.


(function (length, width) {
    const area = length * width; // Pass the variable
    console.log('The area is ' + area);
})(10, 5);

// Solution 2

((length, width) => {
    const area = length * width;

    const output = `The area of a rectangle with a length of ${length} and a width of ${width} is ${area}.`;
    console.log(output)

})(10, 5);




