function Rectangle(name, width, length) {
    this.name = name;
    this.width = width;
    this.height = length;
}

// Addding methods to the prototype
Rectangle.prototype.area = function () {
        return this.length * this.width;
    };

Rectangle.prototype.perimeter = function () {   
    return 2 * (this.width + this.length);
}

Rectangle.prototype.isSquare = function () {   
    return 2 * (this.width + this.length);
}

Rectangle.prototype.isSquare = function () {   
    return this.width === this.length;
}

Rectangle.prototype.changeName = function () {   
    return this.name === newName;
}

const rect = new Rectangle('Rect', 47, 63);
const rect2 = new Rectangle('Rect 2', 30, 40);

console.log(rect);
console.log(rect.area());
console.log(rect.perimeter());
console.log(rect.isSquare());
rect.changeName('Test');
console.log(rect.name);

console.log(rect2.area());