// document.getElementById

console.log(document.getElementById('app-title')); // Get element by of (app-title).
console.log(document.getElementById('app-title').id); // Get element by id
console.log(document.getElementById('app-title').className); // Get element by class name;
console.log(document.getElementById('app-title').getAttribute('id')); // Get element by attribute;

// Set attibutes
document.getElementById('app-title').title = 'Shopping List'; // assigning a new element
document.getElementById('app-title').setAttribute('class', 'title'); //  assigning a new element using the Set Attribute

// assigning a variable to a selector
const title = document.getElementById('app-title');

// Get/change content
console.log('title');
title.textContent = 'Hello World';
title.innerText = 'Hello Again';
title.innerHTML = '<strong>Shopping List</strong>';

// Change style
title.style.color = 'red';
title.style.backgroundColor = 'black';
title.padding = '10px';
title.style.borderRadius = '10px';

// document.querrySelector

console.log(document.querySelector('h1'));
console.log(document.querySelector('#app-title'));
console.log(document.querySelector('.container'));
console.log(document.querySelector('input[type = "text"]'));
console.log(document.querySelector('li:nth-child(2)').innerText);

const secondItem = document.querrySelector('li:nth-child(2)');
secondItem.innerText = 'Apple Juice';
secondItem.style.color = 'red';

// User these methods in other elements
const list = document.querySelector('ul');
console.log(list);
const firstItem = list.querySelector('li');
firstItem.style.color = 'blue';



