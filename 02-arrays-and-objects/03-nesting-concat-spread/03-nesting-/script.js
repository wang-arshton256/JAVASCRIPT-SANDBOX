let x;
studentNames = ['Wang', 'Peter', 'Samuel', 'John', 'Patrick'];
studentMarks = [98, 78, 60, 85, 75];

studentNames.push('Jenifer');
studentMarks.push(85);

// Spread Operator
x = studentNames.concat(studentMarks); // concatenating one array to another.
x = [...studentNames, studentMarks]; // Using the spread opeartor to concatenate arrays. This can add values from one array directly into another array.
console.log(x);

