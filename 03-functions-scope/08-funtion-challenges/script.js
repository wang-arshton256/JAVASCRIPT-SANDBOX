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

//function minMax(arr) {
//    const min = Math.min(arr);
//    console.log(min);
//}

minMax(1, 2, 3, 4, 7);

function maximum(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    return {
        min,
        max,
    };
}
console.log(minMax([1, 2, 3, 4, 5]));



