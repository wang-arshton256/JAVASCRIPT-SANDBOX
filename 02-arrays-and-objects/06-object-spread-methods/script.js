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

const obj2 = {nationality:'Ugandan', Continent: 'Africa', skinColor: 'Black',
}

// Using the spreat operator to  nest objects
const obj3 = { ...obj1, ...obj2 };
console.log(obj3);


// using the assign methods
const obj4 = Object.assign({}, obj1, obj2);
x = obj4;
console.log(obj4);


// Passing objects as an array
const student = [
    { id:1, name: 'Gerald', Sex: 'male', },
    { id:2, name: 'Peter', Sex: 'male', },
    { id:3, name: 'Sandra', Sex: 'female', },
]

x = student[1];

console.log(x);


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