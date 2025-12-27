let x;

const shop = new Object();
shop.name = 'Tasha shoping mall';
shop.address = 'Mukono';
shop.contact = +256779262626;

x = shop;
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