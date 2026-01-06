
const d = new Date(10, 30, 2022, 22, 0, 0);
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
