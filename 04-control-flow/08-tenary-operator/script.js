const age = 19;

// Using an if statement
if (age >= 18) {
    console.log('You can vote!');
} else {
    console.log('You can not vote');
}

// Using a ternary operator

age >= 18 ? console.log('You can vote!') : console.log('You can not vote');

// Assigning a conditional value to a variable
const canVote = age >= 18 ? true : false;
const canVote2 = age >= 18 ? 'You can vote' : 'You can not vote';

console.log(canVote);
console.log(canVote2);

// Multiple statements
const auth = false;
// let redirect;

// if (auth){
//alert('Welcome to the dashboard');
//redirect = '/dashboard';

//} esle {
//alert('Access Denied');
//redirect = '//login';
//}

const redirect = auth ? (alert('Welcome to the dashboard'), '/dashboard') : (alert('Access Denied'), '/login');
console.log(redirect);

// Evaluate if auth id true of false
auth ? console.log('Welcome to the Dashboard') : null; // a ternary statement must have an else condition if not it will pass an error, so use the : null condition if there if not else inorder for it to pass
auth && console.log('Welcome to the Dashboard'); // alternative shorter version without adding : null is using the &&