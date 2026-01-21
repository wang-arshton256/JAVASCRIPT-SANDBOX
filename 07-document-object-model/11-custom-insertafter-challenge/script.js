// insert after 
// create a custom  insertAfter() function. The first param will be newEl which will be a new element that you create with document.createElement()
// The second param will be existingEl which is an element in the DOM that you want to insert your new element after.

function insertAfter(newEl, existingEl) {
    existingEl.parent.Element.insertBefore(newEl, existingEl.nextSibling);
}

// New element  to insert
const li = document.createElement('li');
li.textContent = 'Insert Me After';

// Existing element to insert after
const first = document.querySelector('li:first-child');

// Our custom function
insertAfter(li, firstItem);