// Arithmetic operators

let x;

x = 5 + 5;
x = 5 - 5;
x = 5 * 5;
x = 5 / 5;
x = 5 % 5;

console.log(x);


//String Concatination uses (+)

let name1 = 'Wangutusi ';
let name2 = 'Arshton'; 
let age = 20;

console.log('My name is ' + name1 + name2, 'I am ' + age + ' years old');

//1. Exponent
x = 2 ** 3;

//Increment 
x = 1;
x++;

//Decrement
x = x - 1 //or
x--;

//2. Assignment operators
x = 10
x += 5;
x +- 5;
x *= 5;
x /= 5;
x %= 5;
x ** 5;

//3. Comparison operators
x = 2 == '2' // (==) Double equal signs checks whether the value of x is equivalent to 2 buit doesn't check if its datatype is number or not. 
x = 2 === '2' // (===) Triple equal signs check whether the value of x is both equivalent to 2 and whether its also a datatype of number.
X = 2 != '2'//(!=) Means not equal to but doesnt check if its an int or string.
x = 2 !== 2; //(!==) Means not equal to but and checks if its an int or string.
x = 2 > 5; // greater than
x = 2 < 5; // less than
x = 2 <= 5; // less than or equal to 
x = 2 >= 5; // greater than or equal to