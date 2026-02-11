function Rectangle(name, width, length) {
    this.name = name;
    this.width = width;
    this.height = length;
    this.area = function () {
        return this.length * this.width;
    };
}

const rect = new Rectangle('Rect', 47, 63);
console.log(Object.getPrototypeOf(rect));