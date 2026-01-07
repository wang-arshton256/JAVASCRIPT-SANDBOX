const colorObj = {
    color1: 'red',
    color2: 'green',
    color3: 'blue',
    color4: 'yellow',
}

// Passing a For in Loop in an object
for (const key in colorObj) {
    console.log(key, colorObj[key]);
}

// Passing a For in Loop in an array
const colorArr = ['red', 'blue', 'green', 'yellow'];
for (const key in colorArr) {
    console.log(colorArr[key])
}
