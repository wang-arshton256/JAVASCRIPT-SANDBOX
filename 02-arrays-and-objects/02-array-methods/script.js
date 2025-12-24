const arr = [25, 85, 98, 74];

arr[arr.length] = 'mango';

//Properties for modifing the array
arr.push(1000); // Adds 1000 to the last index (Works just like the .length property)
arr.pop(); // Removes the last value of the array
arr.unshift(99); // Adds 99 to index (0);
arr.shift(); // Removes first value at index (0)
arr.reverse(); // Reverses last action made to the array


console.log(arr);