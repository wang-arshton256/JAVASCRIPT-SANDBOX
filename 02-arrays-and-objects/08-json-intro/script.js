//JSON - Javascript Object Notation

const post = {
    id: 1,
    title: 'Post One',
    body: 'This is the body',

};

// Converting JSON to a string
const str = JSON.stringify(post);
console.log(post)

// Parse JSON
const obj = JSON.parse(str);

console.log(obj)