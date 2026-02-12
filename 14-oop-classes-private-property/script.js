class Rectangle {
    constructor(name, width, length) {
        this.name = name;
        this.width = width;
        this.length = length;
    }
    
    area() {
        return this.length * this.width;
    }
    
    perimeter() {
        return 2 * (this.length + this.width);
    }

    isSquare() {
        return this.width === this.length;
    }

    // Using this keyword to access other methods
    logArea() {
        console.log('Rectangle Area: ' + this.area());
    }
}

const square = new Rectangle('Square', 45, 89);
console.log(square); // Log object
console.log(square.area()); // Log area
console.log(square.perimeter()); // Calculating perimeter
console.log(square.isSquare()); // Checking is object is a square
square.logArea();


console.log(Object.getPrototypeOf(square)); // Checking type of object

