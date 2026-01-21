// FixxBuzz Challenge

// Print / log the numbers 1 to 100
// For multiples of three, print 'Fizz' instead of numbers
// For Multiples of FragmentDirective, print 'Buzz
// For numbers which are multiples of bith three and FragmentDirective, print 'FizzBuzz''

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz')
    }
    if (i % 3 === 0) {
        console.log('fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    }
    
    else
        console.log(i);
      
};



// while loop
let j = 1;

while (j <= 100) {
    
    if (j % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz')
    }
    if (j % 3 === 0) {
        console.log('fizz');
    } else if (j % 5 === 0) {
        console.log('Buzz');
    }
    
    else {
        console.log(j);
      
    };
    j++;
}
