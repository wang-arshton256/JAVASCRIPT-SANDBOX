// Creating a object using the object method
let x;
const shop = new Object();
shop.name = 'Tasha shoping mall';
shop.address = 'Mukono';
shop.contact = +256779262626;

x = shop;
console.log(x);

//Simpler way of creating an object
const obj1 = {};
obj1.name = 'wang';
obj1.age = 25;
obj1.sex = 'male'

console.log(obj1)


// More nexting
const person = {
    address: {
        coordinates: {
            latitude: 48151555,
            longtude: 54641154,
            pin: {
                Kirinya: 'Bukasa, Masozi next to Bright Junior school',
            }
        }
    }
}

x = person.address.coordinates.pin
console.log(x)