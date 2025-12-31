// Default parameters, you can assign a paramerter a default value like this => function registerUser(user = 'Bot')
    
function registerUser(user) {
    return user + ` You have been registered.`
}
register = registerUser('wang');
console.log(register);


// Rest Params
function sum(...numbers) // Using the rest operator is similar to the spread operator and returns values as an array
{ 
    return numbers;
}
console.log(sum(1, 2, 3, 5, 9));


// Object as Params
function loginUser(user) {
    return `The user ${user.name} with id of ${user.id} is logged in.`;
}

// create a variable and assign it values for name & id
const user = {
    name: 'Wang',
    id: 25,
};

console.log(loginUser(user));
// Alternative
console.log(loginUser({
    id: 2,
   name: 'Wang',
 }));


// Array as params
function getRandon(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];

    console.log(item);
}
 
getRandon([1, 4, 5, 9, 75, 63, 45]);