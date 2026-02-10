function User(name, email, phone) {
    this.name = name;
    this.email = email;
    this.phone = phone;

    // add function
    this.ContactDetails = function () {
       return this.email + '' + this.phone;
    }
}

 // Instantiate the object using a constructor function
const User1 = new User('Wangutusi Arshton', 'wangarshton@gmail.com', +256779252525);
const User2 = new User('Walyemwa Derick', 'walyeDerick@gmail.com', +256778255685);
const User3 = new User('Mirembe Cynthia', 'cynthiamimz@gmail.com', +256996996);

// Log/get properties
console.log(User1); // Log only user without contact details
console.log(User2); // Log only user without contact details
console.log(User3.ContactDetails()); // Log user + contact details


// Log/get properties
console.log(User1.name); // Log only user name
console.log(User2.name); // Log only user name
console.log(User3.name); // Log only user name

console.log(User1.email); // Log only user email
console.log(User1.phone); // Log only user phone


// 1. A new empty object is created
// 2. The constructor function is called with the arguments that we passed in.
// 3. The 'this' keyword is set to the nw empty object.
// 4. The new object is returned from the constructor function  

console.log(User1.constructor);  // Getting the constructor fucnction of an object
console.log(User1 instanceof User); // Getting the instance of an object