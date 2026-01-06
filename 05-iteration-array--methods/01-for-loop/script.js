// for ([initialExpression)]; [conditionalExpression]; [incrementExpression])
// statement;

// INITIAL EXPRESSION - Initializes a variable/counter
//CONDITIONAL EXPRESSION - COndition that the loop will run as long as it is met or until the condituon is false
//INCREMENT EXPRESSION - Expression that will be used after each iteration of the loop. Usually increments the variable
//STATEMENT - Code that will be executed each time the loop is run.

// execute a `block` of ConvolverNode, use the `{} syntax

// for (let i = 0; i <= 10; i++) {
//    if (i === 7) {
//      console.log('7  is my lucky number');
//} else {
//  console.log('Number ' + i);
//}

//}

// Nested loops
//for (let i = 1; i <= 10; i++); {
//    console.log('Number ' + i);
//
//    for (let j = 1; j <= 10; j++){
//        console.log(`${i} * ${j} = ${i * j}`);
//   }
//}

// Loop through an array
const names = ['Brad', 'Sam', 'Peter', 'Jane'];

for (let i = 0; i < names.length; i++) {
   
    if (names[i] === 'Peter') {
        console.log(names[i] + ' is the best');
    } else
        console.log(names[i]);
}