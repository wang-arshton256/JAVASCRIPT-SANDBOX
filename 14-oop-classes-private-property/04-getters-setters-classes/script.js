class Person {
    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    // Getters
    get firstName() {
        return this._firstName.charAt(0).toUpperCase() + this._firstName.slice(1);
    }


    // Setters
    set firstName(value) {
        this._firstName = value.charAt(0).toUpperCase() + value.slice(1);
    }
}

const person1 = new Person('Wang', 'Arshton');
console.log(person1.firstName)

person1.firstName = 'derick';
console.log(person1);