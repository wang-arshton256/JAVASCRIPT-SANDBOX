const form = document.getElementById('item-form');
function onSubmit(e) {
    e.preventDefault(); 

    const item = document.getElementById('item-input').value;
    const priority = document.getElementById('priority-input').value;
   

    if (item === '' || priority === '0' ){
        alert('Please fill in all feilds');
        return;
    }
     console.log(item, priority);
}


// Option 2 for form submission using FormData & entries method

function onsubmit2(e) {
    e.preventDefault();

    const formData = FormData(form);

   // const item = formData.get('item');
   // const priority = formData.get('priority');

    // console.log(item, priority);

    const entries = form.entries();

    for (let entry of entries) {
        console.log(entry);
    }


}




form.addEventListener('submit', onSubmit)
form.addEventListener('submit', onSubmit2)