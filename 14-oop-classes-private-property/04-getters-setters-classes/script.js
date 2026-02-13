class Person {
    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    // Setters
    set firstName(value) {
        this._firstName = this.capitalizeFirst(value);
    }

    // Getters
    get firstName() {
        return this.capitalizeFirst(this._lastName);
    }

    // Setters
    set lastName(value) {
        this._lastName = this.capitalizeFirst(value);
    }

    capitalizeFirst(value) {
        return value.charAt(0).toUpperCase() + value.slice(1);
    }
}

const person1 = new Person('Wang', 'Arshton');
console.log(person1.firstName)

person1.firstName = 'derick';
console.log(person1);

