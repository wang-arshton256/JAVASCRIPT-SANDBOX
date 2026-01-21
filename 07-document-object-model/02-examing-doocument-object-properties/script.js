let output;

output = document.all;
output = document.all[7]; // using the method tom access properties in the document. You can also pass an array index to scpecify which property
output = document.all.length; // To get the length
output = document.documentElement; // To acess all the HTML in the body

output = document.head // To access the head
output = document.body // To access the body
output = document.head.children // To access the children in the head
output = document.body.children // To access the children in the body
output = document.doctype; // To get the type of document
output = document.domain;  // // To get the type of domain
output = document.URL;  // // To get your current URL
output = document.characterSet;  // // To get type of charater set used
output = document.contentType;  // // To get type of content in the page

/* 
output = document.forms;  // To get forms
output = document.forms[0]; //To get items in the form by index
output = document.forms[0].id; // To get items in the form at index 0 by id
output = document.forms[0].method; // To get items in the form at index 0 by method
output = document.forms[0].action; // To get items in the action
document.forms[0].id = 'new-id'; // To get the first form and asign it a new id 
*/

output = document.links; // To get all links in the document
output = document.links[0]; // To get the first link
output = document.links[0].href; // To get the first href
output = document.links[0].href = 'https://facebook.com'; // To get the first href assign it a different value
//output = document.links[0].id = 'google-link'; // To get the first href assign it a different id

output = document.className = 'google-class'; // To assign the first class
output = document.classList; // To get all classes
output = document.images; // Gives an HTML collection of images
output = document.images[0] // To assess the first image
output = document.images[0].src // To get the image source
console.log(output);


// Accessing forms through the DOM
const forms = Array.form(document.forms);
forms.forEach((form) => console.log(forms));
 
