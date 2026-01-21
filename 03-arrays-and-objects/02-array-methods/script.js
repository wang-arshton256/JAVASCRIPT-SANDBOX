
let x;
const arr = [25, 85, 98, 74];

arr[arr.length] = 'mango';

//Properties for modifing the array
arr.push(1000); // Adds 1000 to the last index (Works just like the .length property)
arr.pop(); // Removes the last value of the array
arr.unshift(99); // Adds 99 to index (0);
arr.shift(); // Removes first value at index (0)
arr.reverse(); // Reverses last action made to the array

x = arr.includes(20); // Checks if the array contains the value of 20
x = arr.indexOf(74) // Checks whats index of 74 is

x = arr.slice(0, 3) //Slice checks for the values beginging from the requested index of (0 - 3)

console.log(x);