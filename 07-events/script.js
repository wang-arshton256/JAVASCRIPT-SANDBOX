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