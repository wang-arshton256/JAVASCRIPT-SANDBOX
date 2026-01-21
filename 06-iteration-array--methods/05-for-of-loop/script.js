const items = ['bool', 'table', 'chair', 'kite'];
const users = [{ name: 'Wang' }, { name: 'Cynthia' }, { name: 'Derick' }, { name: 'Brian' }];

for (const item of items) {
    console.log(item);
}
for (const user of users) {
    console.log(user);
}

// Loop ober strings
const str = 'Hello World';

for (const letter of str) {
    console.log(letter);
}

// Loop over Maps

const map = new Map();
map.set('name', 'John');
map.set('age', 30);

for (const [key, value] of map) {
    console.log(key, value);
}