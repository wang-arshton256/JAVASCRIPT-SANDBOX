// create a fuction with () Paranthesis so that its not in the global scope

(function () {
    const user = 'Wang'; // Pass the variable
    console.log(user);
})();  // invoke after


// Adding paramaters

(function (name) {
    console.log('Hello ' + name);
})('Derick');