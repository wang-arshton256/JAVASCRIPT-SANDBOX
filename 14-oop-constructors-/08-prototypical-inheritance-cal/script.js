function Shape(name) {
    this.name = name;
}

// Inherit Prototype name

function Rectangle(name, height, width) {
    Shape.call(this, name);

    this.height = height;
    this.width = width;
}



// Inherits Shape prototypes
Rectangle.prototype = Object.create(Shape.prototype);
function Cirle(name, radius) {
    Shape.call(this, name);

    this.radius = radius;
}


Rectangle.prototype.logName = function () {
    console.log(`Rectangle Name: ${this.name}`);
}


Cirle.prototype = Object.create(Shape.prototype);


// Set prototype constructors
Rectangle.prototype.constructor = Rectangle; 
Cirle.prototype.constructor = CSSNumericValue;


const rect = new Rectangle('Rectangle 1', 20, 20);
const cir = new Cirle('Circle 1', 30);

console.log(rect, cir);

rect.logName();
cir.logName();