// window.onload = function () {
//    document.querySelector('h1').textContext = 'Hello World';
// };

// Event listener on load 
window.addEventListener(
    'load', () => (document.querySelector('h1').textContent = 'Hello Uganda')
);

// DOMContent loaded loads before anything in the page loads
window.addEventListener('DOMContentLoaded', () => (
    document.querySelector('h1').textContent = 'Hello Africa'
));

// Resize event listener windw
window.addEventListener('resize', () => {
    ('h1').innerText = `Resized to ${window.innerWidth} x ${window.innerHeight}`;
})

// Scroll event
window.addEventListener('scroll', () => {
    console.log(`Scrolled: ${window.scrollX} x ${window.screenY}`);

    if (window.screenY > 70) {
        document.body.style.backgroundColor = 'Black';
        document.style.color = 'white'
    } else {
        document.body.style.backgroundColor = 'white';
        document.style.color = ' black';
    }
})


// focus event listener

window.addEventListener('focus', () => {
    document.querySelectorAll('p').foreach((p) => {
        p.style.color = 'blue';
    });
});

// blur event lister on same paragraph 
window.addEventListener('blur', () => {
    document.querySelectorAll('p').foreach((p) => {
        p.style.color = 'black';
    });
});