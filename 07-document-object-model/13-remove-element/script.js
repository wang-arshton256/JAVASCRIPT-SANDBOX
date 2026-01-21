function removeClearButton() {
    const clearBtn = document.querySelector('#clear');
    clearBtn.remove();
}

function removeFirstItem() {
    const ul = document.querySelector('ul');
    const li = document.querySelector('li:first-child');

    ul.removeChild(li);
}

// A function to remove a specific item in the list
function removeItem(itemNumber) {
    const ul = document.querySelector('ul');
    const li = document.querySelector(`li:nth-child(${itemNumber})`);
    ul.removeChild(li);
}

// option 2
function removeItem2(itemNumber) {
    const ul = document.querySelector('ul');
    const li = document.querySelectorAll('li')[itemNumber];
    ul.removeChild(li);
}

// Option 3

function removeItem3(itemNumber) {
    const li = document.querySelectorAll('li');
    li[itemNumber - 1].remove();
}
// Shorter way
const removeItem4 = (itemNumber) => document.querySelectorAll('li')[itemNumber - 1].remove();


removeClearButton();
removeFirstItem();
removeChild();
removeItem2();
removeItem3(2);
removeItem42();