const clearBtn = document.querySelector('#clear');

function onClear() {
    alert('Clear items');
}
// Javascript EVent Listener
// clearBtn.onclick = function () {
//    alert('Warning, your are about to Clear Items')
// };

// addEventLIstener()
clearBtn.addEventListener('click', function () {
    alert('Clear Items');
});

// Shorter way (Arrow function)
clearBtn.addEventListener('click', () => alert('Clear Items'));

// passing the onclear function
clearBtn.addEventListener('click', onClear);

// Using remove function()
setTimeout(() => clearBtn.removeEventListener('click', onClear), 5000);

// Triger an event after set time
setTimeout(() => clearBtn(), 5000);

// function to clear all items in a list
function onClear() {
    const itemsList = document.querySelector('ul');
    const items = itemList.querySelectorAll('li');
    
    // option 1 Set it to empty
    itemsList.innerHTML = '';
    
    //option 2 using a for loop
    items.forEach((item) => item.remove());

    // Option 3 Using a while Loop
    while (itemsList.firstChild) {
        itemsList.removeChild(itemList.firstChild);
    }
    }