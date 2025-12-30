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

// Passing several arrays using JSON
const beneficiaries = [

    {
        id: 1,
        title: 'Post One',
        body: 'This is the body'
    },
    {
        id: 2,
        title: 'Post two',
        body: 'This is the second body'
    }
];

const newBeneficiaries = JSON.stringify(beneficiaries);
console.log(newBeneficiaries);
