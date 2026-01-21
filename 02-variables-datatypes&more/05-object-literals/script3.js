let x;

const customer = {
    name: '',
    age: 25,
    conctact: +256779252525,
    address: {
        home: 'Mukono',
        office: 'Lugazi',
    },
    sex: 'Male',
    nationality: 'Ugandan',
    Tribe: 'Gishu',
    isMarried: true,
    noOfChildren: 5,
    spouseName: 'Tasha',

}

customer.name = 'Wangutsi';

// console.log(customer);

customer.profile = function () {
    console.log(`This is my profile:  ${this.name}`);

};

customer.profile();
console.log(customer);