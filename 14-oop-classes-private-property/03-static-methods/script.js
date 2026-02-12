

class Rectangle {
    constructor(name, width, length) {
        this.name = name;
        this.width = width;
        this.length = length;
    }
    
    area() {
        return this.length * this.width;
    }

    static getClass() {
        return 'Rectangle';
    }

}

const rect = new Rectangle('Rectangle 1', 30, 78);

console.log(rect.area());
console.log(Rectangle.getClass())
