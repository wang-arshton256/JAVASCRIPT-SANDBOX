const rectangleProtoypes = {
    area: function () {
        return this.width * this.length;
    },
    perimeter: function () {
        return 2 * this.width + this.height;
    },
    isSquare: function() {
        return this.width === this.height;
    }
};


function createRectangle(height, width) {
    return Object.create(rectangleProtoypes, {
        height: {
            value: height,
        },
        width: {
            value: width,
        },
    });
}

const rect = createRectangle(10, 20);
console.log(rect);
console.log(rect.area());
console.log(rect.isSquare());


const rect2 = createRectangle(20, 20);
console.log(rect2.area());