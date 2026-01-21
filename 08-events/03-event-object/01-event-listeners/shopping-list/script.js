// Passing a fucntion on click
const logo = document.querySelector('img');
function onClick(e) {
    console.log(e);

}

    /* // Target Event Listener shows the target before the event is fired, same as currentTarget
        console.log(e.target);
        console.log(e.currentTarget);
        console.log(e.type); // Gives the type of event
        console.log(e.clientX); // Gives the position of the mouse click relative to the window
        console.log(e.clientY); // Gives the position of the mouse click relative to the window
        console.log(e.offsetX); // The mouse click relative to the element
        console.log(e.offsetY); // The mouse click relative to the element
        console.log(e.PageX); // The position of the mouse click relative to the page
        console.log(e.PageY); // The position of the mouse click relative to the page
        console.log(e.screenX); // The position of the mouse click relative to the screen
        console.log(e.screenY); // The position of the mouse click relative to the screen
     */
    logo.addEventListener('click', onClick);
    

    // Event listener to prevent links from loading
    document.querySelector('a').addEventListener('click', function (e) {
        e.preventDefault();
        console.log('Link was clicked');
    });
