// console.log
// console.dir(window.document);
// console.log(document.body.innerHTML)
// console.log(document.links[0]); // show all links in document
// document.body.innerHTML = '<h1> Hello World</h1>'; // insert content directly into the body
// document.write('Hello from JS'); // Add content with out targeting which on specificlly
console.log(document.getElementById('main'));
const main = document.getElementById('main');
// main.innerHTML = '<h1>Hello from Main</h1>';

document.querySelector('#main h1').innerText = 'Hello';