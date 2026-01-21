const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');

// adding an event lsitener to target and remove all list items clicked

list.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.remove();
    }
});
// adding an event lsitener to change all list items hovered over

list.addEventListener('mouseover', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.style.color = 'red';
    }
});