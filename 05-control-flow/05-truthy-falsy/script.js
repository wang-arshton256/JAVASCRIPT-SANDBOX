

// Checking for empty arrays
const posts = ['Post One'];

if (posts.length > 0) {
    console.log('List Posts');
} else {
    console.log('No Posts To List');
}


// Checking for an empty object

const user = {
    name: 'wang',
    age: 25,
    height: 5.7,

};

if (Object.keys(user).length > 0) {
    console.log('List User');
} else {
    console.log('No User')
}

// Loose equality (==)
console.log(false === 0);
console.log('' === 0);
console.log('' === undefined);