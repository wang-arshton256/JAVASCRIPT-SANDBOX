// Step 1: Createing an array of objects called library with 3 objects with a property of title, author, status.
// The author should be strings of what every value you want, & status should be another object with the properties
// of own, reading & read which should be boolean values. For all status, set own to  true, & reading & read to false.

// Step 2: You finished reading all of the books, Set the read value ffor all of them to true. Do not edit the initiat object.
// Set the values using the dot notation. 

// Step 3: Destructure the title from the first book & rename the value to firstBook.
// STep 4: Turn the object into a JSON string.

// Step 1
const library = [
    {
        title: "GoPro",
        author: "Wang",
        status: {
            own: true,
            reading: false,
            read: false,
        }
    },

    {
        title: "Pixels",
        author: "Dero",
        status: {
            own: true,
            reading: false,
            read: false,
        }
    },

    {
        title: "Accounting",
        author: "Mirembe",
        status: {
            own: true,
            reading: false,
            read: false,
        }
    },

];

// Step 2
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

console.log(library);

// Step 3
const { title: firstBook } = library[0];

// Step 4 
const str = JSON.stringify(library);

console.log(str);



