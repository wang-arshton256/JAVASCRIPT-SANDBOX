const itemInput = document.getElementById('itemInput');
const priorityInput = document.getElementById('priority-Input');
const checkbox = document.getElementById('checkbox');
const heading = document.getElementById('h1');

  function onInput(e) {
    heading.textContent = e.target.value;
  }

function onChecked(e) {
  const isChecked = e.target.checked;
  heading.textContent = isChecked ? 'Cheched' : 'Not Checked';
  }
function onFocus() {
  console.log('Input is focused');
  itemInput.style.outline = 'solid';
  itemInput.style.outlineWidth = '1px';
  itemInput.style.outlIneColor = 'red';
}
function onBlur() {
  console.log('Input is not focused');
  itemInput.style.outlineStyle = 'none';
}

itemInput.addEventListener('input', onInput);
priorityInput.addEventListener('change', onInput);
checkbox.addEventListener('input', onChecked);
itemInput.addEventListener('focus', onFocus);
itemInput.addEventListener('blur', onBlur);
  
