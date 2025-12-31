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