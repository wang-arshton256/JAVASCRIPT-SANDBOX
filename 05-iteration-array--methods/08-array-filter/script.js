const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter(function (number) {
    return number % 2 === 0;
})
console.log(evenNumbers);

// Short version
// const evenNumbers = numbers.filter((number) => numbers % 2 === 0);
// console.log(evenNumbers);

// Same with forEach
// let evenNumbers;
// numbers.forEach((number) => {
//    if (number % 2 === 0) {
//        evenNumbers.push(number);
//    }
// })
// console.log(evenNumbers);



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

// Get only retail companies
const comapanyCategory = companies.filter((company) => company.category === 'Retail');
console.log(comapanyCategory);

// Get comapnies that started in 1980 and ended before 2005
const dateStarted = companies.filter((company) => company.start > 1980 && 2005);
console.log(dateStarted);

// Option 2:
const earlyCompanies = companies.filter(
    (company) => company.start >= 1980 && company.end <= 2005);
console.log(earlyCompanies);


// Get companies that lasted 10 years or more

const longCompanies = companies.filter((company) => company.end - company.start >= 10);
console.log(longCompanies);