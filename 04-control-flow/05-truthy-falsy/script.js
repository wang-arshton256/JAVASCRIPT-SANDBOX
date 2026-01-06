// Falsy Values:
// - false
// - 0 
// - "" or '' (empty string)
// - null 
// - undefined
// - NaN

// Truthy Values:
// - Everything else that is not falsy
// - true
// - '0' (0 in a string'
// - 'false' (false in a string)
// - '' (space in a string)
// - [] (empty array)
// - {} (empty object)
// - fuction () {} (empty function)


const email = 'wang@gmail.com'; // Anything passed in a string becomes a true boolean

if (email) {
    console.log('You passed in an email');
} 
console.log(Boolean(email)); 


const x = false;

if (x) {
    console.log('This is truthy');
} else {
    console.log('This is false');
}

console.log(Boolean(x))  // X is not boolean in this case because it wasn't wrapped in a string.