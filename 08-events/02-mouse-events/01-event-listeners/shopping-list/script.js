const logo = document.querySelector('img');

const onclick = () => console.log('click event');
const onDoubleClick = () => console.log('Double click event');
const onMouseDown = () => console.log(' Mouse down event');
const onMouseUp = () => console.log(' Mouse Up event');
const onMouseWheel = () => console.log(' Mouse Up event');
const onMouseOver = () => console.log(' Mouse Over event');
const onMouseOut = () => console.log(' Mouse Out Event');
const onDragStart = () => console.log(' Drag Start Event');
const onDrag = () => console.log(' Drag Event');
const onDragEnd = () => console.log('Drag End Event');


// Event Listeners
logo.addEventListener('click', onclick);
logo.addEventListener('dblclick', onDoubleClick); // double click is dblclick
logo.addEventListener('mouseup', onMouseUp); 
logo.addEventListener('wheel', onMouseWheel); 
logo.addEventListener('mouseover', onMouseOver); 
logo.addEventListener('mouseout', onMouseOut);   
logo.addEventListener('dragstart', onDragStart);   
logo.addEventListener('drag', onDrag);   
logo.addEventListener('dragend', onDragEnd);   


