const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = numbers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0); // 0 means starting from zero index

console.log(sum);

// Shorter version
const sum2 = numbers.reduce((acc, cur) => acc + cur, 0); // 0 means starting from zero index

//using a for Loop
const sum3 = () => {
    let acc = 0; // 0 means starting from zero index
    for (const cur of numbers) {
        acc += cur;
    }
    return acc;
};
console.log(sum3());

// Example with a cart
const cart = [
    { id: 1, name: 'product', price: 130 },
    { id: 1, name: 'product', price: 250 },
    { id: 1, name: 'product', price: 700 },
    { id: 1, name: 'product', price: 10 },
    { id: 1, name: 'product', price: 80 },
];

const total = cart.reduce(function (acc, product) {
    return acc + product.price;
}, 0); // 0 means starting from zero index
console.log(total);

// Example 2:
const cart1 = [
    { id: 1, name: 'product', price: 130 },
    { id: 1, name: 'product', price: 250 },
    { id: 1, name: 'product', price: 700 },
    { id: 1, name: 'product', price: 10 },
    { id: 1, name: 'product', price: 80 },
];

// Using shorter version
const total2 = cart1.reduce((acc, product) => acc + product.price, 0);
console.log(total2);