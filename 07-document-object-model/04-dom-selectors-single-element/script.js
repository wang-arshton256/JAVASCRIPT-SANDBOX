// querySelectorAll()

/* const listItems = document.querySelectoAll((item));
console.log(listItems[1].innerText);

listItems[1].style.color = 'red';

listItems.array.forEach((item) => {
    item.style.color = 'red';

    if (index === 1 ) {
        item.remove();
    }

if (item === 0) {
    item.innerHTML = `Oranges
    <button class = "remove-item btn-link text-red">
        <i class="fa-solid fa-xmark"></i>
    </button>`;
}
}); */

const listItems2 = document.getElementsByClassName('item');
console.log(listItems2[2].innerText);

const listItemsArray = Array.from(listItems2);

listItemsArray.forEach((item) => {
    console.log(item.innerText);
});

const listItems3 = document.getElementsByTagName('li');
console.log(listItems3[0]);
