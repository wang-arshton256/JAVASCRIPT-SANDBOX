//  
// setTimeout(function () {
//    console.log('Hello from callback');

// }, 2000);

// console.log('Hello from global scope');



// Named fucntion to change H1 after 3 seconds
setTimeout(changeText, 3000);
function changeText() {
    document.querySelector('h1').textContent = 'Hello from Callback'
}

const timerId = setTimeout(changeText, 3000);

Document.querySelector('#cancel').addEventListener('click', () => {
    console.log(timerId);
    clearTimeout(timerId);
    console.log('Timer Cancelled');
});