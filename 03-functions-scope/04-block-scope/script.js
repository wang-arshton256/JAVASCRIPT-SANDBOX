const x = 100;
const foo = 1;
var bar = 2;

if (true) {
    const y = 200;
    console.log(x + y);
}

// console.log(x + y);  This doesn't run because (y) has not been defined in a global scope.



for (let i = 0; i <= 30; i++){

    console.log(i);  // Works in functional scope
}
// console.log(i); // Doesnt run when accessed from oustide the fuction because is a fucntionl scope

if (true) {
    const a = 100;
    let b = 500;
    var c = 1000;
}

// console.log(a)  Doesnt run because is a fucntionl scope
// console.log(b)  Doesnt run because is a fucntionl scope
console.log(c)     // var can't not be accessed the global scope except in loops and if statements

function run(){
    var d = 120;
    console.log(d);  // Var is function scopedruns in function scope
}

// console.log(d);  Can not run in global scope except in loops and if statements
run();