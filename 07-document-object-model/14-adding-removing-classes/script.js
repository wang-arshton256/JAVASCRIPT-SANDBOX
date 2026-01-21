const text = document.querySelector('p');
const itemList = document.querySelector('.item-list');
const items = itemList.querySelectorAll('li');

function run() {
    // className
    // console.log(itemList.className);
    // text.className = 'card dark';


    // classList
    // console.log(items.classList) // To Log all items in classList

    // or
    // items.classList.forEach((c) => console.log(c));
    // shorter way to change classes
    // text.classList.add('dark') // using add method to add a class
    // text.classList.remove('card');

    // text.classList.toggle('dark'); // toggle dark & light mode
    // text.classList.toggle('hidden'); // toggle hidden class

    // change style
    // itemList.style.lineHeight = '3';

    
    items.forEach((item, index) => {
        item.style.color = 'red';
        if (index === 2) {
            item.style.color = 'blue';
        }
    });




}

document.querySelector('button').onclick = run;