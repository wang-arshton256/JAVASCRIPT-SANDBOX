const rectangle = {
    name: 'Rectangle',
    width: 20,
    height: 10,
    area: function () {
        return this.width * this.height;
    },
};

console.log(rectangle.area());

const rectangle2 = {
    name: 'Rectangle 2',
    width: 45,
    height: 17,
    area: function () {
        return this.width * this.height;
    },
};

console.log(rectangle2.area());