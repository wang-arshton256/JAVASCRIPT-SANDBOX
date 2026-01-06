
const d = new Date(10, 30, 2022, 8, 0, 0);
const hour = d.getHours();

if (hour < 12) {
    console.log('Good morning');
} else if (hour < 18) {
    console.log('It is afternoon');
}
    
else {
    console.log('It is night.');
}



// Nested if

if (hour < 12) {
    console.log('Good morning');

    if (hour === 6) {
        console.log('Wake up');
    }
} else if (hour < 18) {
    console.log('It is afternoon');
}
    
else {
    console.log('It is night.');

    if (hour > 20) {
        console.log('Time to sleep!!!')
    }
}

// Passing multiple conditions

if (hour >= 7 && hour < 15) {
    console.log('Its is work time');
}

if (hour === 6 || hour > 20) {
    console.log('Brush your teeth!');
}