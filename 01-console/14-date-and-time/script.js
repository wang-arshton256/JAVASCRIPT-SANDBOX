let d;
d = new Date();
d = Date.now(); // Current date in microseconds
d = d.getTime // to get current time
d = d.valueOf(); // get value of date
d = d.toString(); // changing date to string

// A better way is Using the DATE TIME FORMAT API Function
d = d.toLocaleString('dafault',
    {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZone: 'Africa/Nairobi',

    }

);

console.log(d);
