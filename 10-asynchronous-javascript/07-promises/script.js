// create promise
const promise = new Promise((resolve, reject) => {
    // Do some async task
    setTimeout(() => {
        console.log('Async task complete');
        resolve();
    }, 1000);
});

promise.then(() => {
    console.log('Promise consumed ....');
});

// running new promise after the other.
new Promise((resolve, reject) => {
    // Do some async task
    setTimeout(() => {
        console.log('Async task 2 complete');
        resolve();
    }, 1000);
}).then(() => console.log('Promise 2 consumed ....'));

// Returning data from a promise
new Promise((resolve, reject) => {
    // Do some async task
    setTimeout(() => {
        resolve({ name: 'John', age: 30});
    }, 1000);
}).then((user) => console.log(user));

console.log('Hello from global scope');


// Catching errors
const getUser = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;

        if (!error) {
            resolve({ name: 'John', age: 30 });
        } else {
            reject('Error: Something went wrong');
        }
    }, 1000);
})

getUser.then((user) => console.log(user)).catch((error) => console.log(error))
.catch ((error) => console.log(error))
.finally(() => console.log('The promise has been resolved of rejected'));
console.log('Hello from global scope');