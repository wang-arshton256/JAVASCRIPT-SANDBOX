// ||= assigns the right side value only if the left is a false value.

let a = false;

if (!a) {
    a = 10;
}

a = a || 10; // shorter way to do that using the || operator
// or
a ||= 10;
console.log(a);


// &&= assigns the right side values only if the left is a true value

let b = 10;

if (b) {
    b = 20;
}

b = b && 20;
b &&= 20;
console.log(b);


// ??= assigns the right side value only if the left is null or undefined

let d = null;

if (c = null) {
    c === null || c === undefined;
    c = 20
}

c= c ?? 90;
c ??= 90;
console.log(c);

