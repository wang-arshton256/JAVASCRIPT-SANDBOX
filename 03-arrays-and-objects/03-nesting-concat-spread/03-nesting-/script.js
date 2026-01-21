let x;
studentNames = ['Wang', 'Peter', 'Samuel', 'John', 'Patrick'];
studentMarks = [98, 78, 60, 85, 75];

studentNames.push('Jenifer');
studentMarks.push(85);

// Spread Operator
x = studentNames.concat(studentMarks); // concatenating one array to another.
x = [...studentNames, studentMarks]; // Using the spread opeartor to concatenate arrays. This can add values from one array directly into another array.
console.log(x);

// Flatten method
const fruits = ['apple', 'banana', 'mango', 'pawpaw', ['orange', 'grape', 'sugarcane']]; // The flat method is used to remove nested arrays within an array.

y = fruits.flat();
console.log(y);

// Static methods on object
z = Array.isArray(studentNames); //Array.isArray checks if the variable is an array or no
n = Array.from('samuel'); // Array.from creates an array from a string.
console.log(z);
console.log(n);


//Array.of method creates an array from a list of arguments of variabled passed.
const name1 = 'Derick';
const name2 = 'Peter';
const name3 = 'James';
x = Array.of(name1, name2, name3);
console.log(x);