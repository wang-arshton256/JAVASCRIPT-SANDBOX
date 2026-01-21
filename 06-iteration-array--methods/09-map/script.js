const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((numbers) => numbers * 2);
console.log(doubledNumbers);

// Same with forEach
const doubledNumbers2 = [];

numbers.forEach((number) =>  {
    doubledNumbers2.push(number * 2);
});
console.log(doubledNumbers2);


const companies = [
    { name: 'company One', category: 'Finance', start: 1981, end: 2004 },
    { name: 'company Two', category: 'Retail', start: 1981, end: 2004 },
    { name: 'company Three', category: 'Auto', start: 1981, end: 2004 },
    { name: 'company Four', category: 'Retail', start: 1981, end: 2004 },
    { name: 'company Five', category: 'Technology', start: 1981, end: 2004 },
    { name: 'company Six', category: 'Finance', start: 1981, end: 2004 },
    { name: 'company Seven', category: 'Auto', start: 1981, end: 2004 },
    { name: 'company Eight', category: 'Technology', start: 1981, end: 2004 },
    { name: 'company Nine', category: 'Retail', start: 1981, end: 2004 },
];

// Create an array of company names
const companyNames = companies.map((company) => company.name);
console.log(companyNames);

// Create an array with just company and category
const companyInfo = companies.map((company) => {
    return {
        name: company.name,
        category: company.category,
    }
})
console.log(companyInfo);

// Create an array of objects with the name and the length of each comapny in years
const companyYears = companies.map((company) => {
    return {
        name: company.name,
        length: company.end - company.start
    }
});
console.log(companyYears);

// chain map methods
const squareAndDouble = numbers.map((number) => Math.sqrt(numbers))
    .map((sqrt) => sqrt * 2);

    // Version 2
const squareAndDouble2 = numbers.map(function (number) {
    return Math.sqrt(number);
})

.map(function (sqrt) {
    return sqrt * 2;
});

// Shorter version

.map(function (sqrtDoubled) {
    return sqrtDoubled * 3;
});


console.log(squareAndDouble2);



const companies = [
    { name: 'company One', category: 'Finance', start: 1981, end: 2004 },
    { name: 'company Two', category: 'Retail', start: 1981, end: 2004 },
    { name: 'company Three', category: 'Auto', start: 1981, end: 2004 },
    { name: 'company Four', category: 'Retail', start: 1981, end: 2004 },
    { name: 'company Five', category: 'Technology', start: 1981, end: 2004 },
    { name: 'company Six', category: 'Finance', start: 1981, end: 2004 },
    { name: 'company Seven', category: 'Auto', start: 1981, end: 2004 },
    { name: 'company Eight', category: 'Technology', start: 1981, end: 2004 },
    { name: 'company Nine', category: 'Retail', start: 1981, end: 2004 },
];

// Chaning multiple methods
const evenDouble = numbers
.filter((number) => number % 2 === 0)
.map((number) => number * 2 )
console.log(evenNumbers);