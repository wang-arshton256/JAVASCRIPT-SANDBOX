// Data stored in a stack and changes the original variable.
let name = 'wang';
age = 25;


// Data stored in a heap (Is accessed by referencing or pointig to the newly created variable.)
let fullProfile = {
    nationality : 'Ugandan',
    placeOfBirth : 'Mulago',
    sex :'male',
    Address : 'Bweyogerere',
    phone : +256779252525,

}

let newName = name;
newName = 'Wangutusi';

let newFullProfile = fullProfile;
newFullProfile = {
    nationality : 'Rwandees',
    placeOfBirth :'Nakasero',
    sex : 'male',
    Address : 'Muyenga',
    phone : +256779452525,

}

console.log(newName);
console.log(newFullProfile);
