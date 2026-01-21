// Spread operator
let x;

const profile = { name: 'wang', age: 25, sex: 'male' };
const education = { school: 'Musuco', year: 2014, classCompleted: 'HSC' };

x = { ...profile, ...education };


console.log(x)

// Passing objects as an array
let y;
const student = [
    { std1: 'Wangutusi', age: 25, sex: 'male', nationality: 'Ugandan', },
    { std12: 'Derick', age: 29, sex: 'male', nationality: 'Ugandan', },
    { std3: 'Cynthia', age: 21, sex: 'female', nationality: 'Ugandan', },   
]

y = student[2];
console.log(y); 


// More nested objects
const beneficiaries = {
    profile: {
    name: 'wangutusi',
    age: 25,
    sex: 'male',
    nationality: 'Uganda',
        phone: +256778252525,
        address: {
            homeLocation: 'Kirinya',
            homeDistrict: 'Mbale',
            office: {
                mainBranch: 'Muyenga',
                reginalBranchEastern: 'Jinja',
                reginalBranchWestern: 'Mbarara',
                reginalBranchCentral: 'Kampala',
                reginalBranchNorthern: 'Lira',

            }

        }
    }

}


console.log(beneficiaries.profile.address);