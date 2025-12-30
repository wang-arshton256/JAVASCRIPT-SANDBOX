let x;
x = Math.floor(Math.random() * 100 + 1);
y = Math.floor(Math.random() * 50 + 1);

// Get sum
const sum = x + y;
const sumOutput = `${x} + ${y} = ${sum}`;
console.log(sumOutput);

// Get the difference
const diff = x - y;
const diffOutput = `${x} - ${y} = ${diff}`;
console.log(diffOutput);

// Get the product
const prod = x * y;
const prodOutput = `${x} * ${y} = ${prod}`;
console.log(prodOutput);

// Get quotient
const quot = x / y;
const quotOutput = `${x} / ${y} = ${quot}`;
console.log(quotOutput);

// Get the remainder 
const rem = x % y;
const remOutput = `${x} % ${y} = ${rem}`;
console.log(remOutput);
