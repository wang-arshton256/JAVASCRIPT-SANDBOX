function replaceFirstItem() {
    const firstItem = document.querySelector('lis:first-child');

    const li = document.createElement('li');
    li.createContent = 'Replaced First';

    firstItem.replaceWith(li);
}

function replaceSecindItem() {
    const secondItem = document.querySelector('li:nth-child(2)');

    secondItem.outerHTML = '<li> Replaced Second</li>';
}

function replaceAllItems() {
    const lis = document.querySelectorAll('li');
// Longer version
    lis.forEach((item, index) => {
        item.outerHTML = '<li>Replace All</li>';
        if (index === 1) {
            
            item.innerHtml = 'Second Item';
        } else {
            item.innerHTML = 'Replace All';
        }
    });
    
    // Shorter version
    lis.forEach(
        (item.outerHTML = index === 1 ? ' <li>Second Item</li>' : '<li> Item</li>')
    );
}


// Replacing Child Header
function replaceChildHeading() {
    const header = document.querySelector('header');
    const h1 = document.querySelector('header H1');

    const h2 = document.createElement('h2');
    h2.id = 'app-title';
    h2.textContent = 'shopping List';
}

replaceFirstItem();
replaceSecindItem();
replaceAllItems();
replaceChildHeading();
