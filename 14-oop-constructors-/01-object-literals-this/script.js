const rectangle = {
    name: 'Rectangle',
    width: 20,
    height: 10,
    area: function () {
        return this.width * this.height;
    },
};

console.log(rectangle.area());