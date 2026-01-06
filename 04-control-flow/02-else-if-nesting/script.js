
const d = new Date(10, 30, 2022, 13, 0, 0);
const hour = d.getHours();

if (hour < 12) {
    console.log('Good morning');
} else if (hour < 18) {
    console.log('It is afternoon');
}
    
else {
    console.log('It is night.');
}