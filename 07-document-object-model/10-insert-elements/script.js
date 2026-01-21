// insertAdjucentElement Example
function insertElement() {
    const filter = document.querySelector('.filter');

    const h1 = document.createElement('h1');
    h1.textContent = 'insertAdjacentElement';

    filter.insertAdjacentElement('beforebegin', h1);
}
// insertAdjucentText Example

function insertText() {
    const item = document.querySelector('li:first-child');

    item.insertAdjacentText('beforebegin', 'insertAdjacentText');

}
// insertAdjucentHTML Example

function insertAdjucentHTML() {
    const clearBtn = document.querySelector('#clear');

    clearBtn.insertAdjacentHTML('beforeBegin', '<h2>insertAdjacentHTML</h2>');
}
// insertBefore Example
function insertBeforeItem() {
    const ul = document.querySelector('ul');

    const li = document.createElement('li',);
    li.textContent = 'insertBefore';

    const thirdItem = document.querySelector('li:nth-child(3)');

    ul.insertBefore(li, thirdItem);
}


insertElement();
insertText();
insertAdjucentHTML();
insertBeforeItem();

// insertAdjucentElement Example
// insertAdjucentElement Example
// insertAdjucentElement Example

// insert