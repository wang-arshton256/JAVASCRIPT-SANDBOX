const socials = ['Twitter', 'LinkedIn', 'Facebook', 'Snapchat'];

//console.log(socials.__proto___);

// socials.forEach(function (item) {
//    console.log(item);
// })

// shorter version
socials.forEach((item) => console.log(item));
socials.forEach((item, index, arr) => console.log(` ${index} - ${item}`, arr));

// socials.forEachs(logSocials)

const socialObjs = [
    { name: 'Twitter', url: 'http://twitter.com' },
    { name: 'facebook', url: 'http://facebook.com' },
    { name: 'linkedIn', url: 'http://linkedin.com' },
    { name: 'snapchat', url: 'http://snapchat.com' },
];

socialObjs.forEach((item) => console.log(item.url));