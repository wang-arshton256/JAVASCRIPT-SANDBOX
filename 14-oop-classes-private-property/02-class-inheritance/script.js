// Parent class
class Shape {
    constructor(name) {
        this.name = name;  
    }
}

// Sub class
class Rectangle extends Shape{
    constructor(name, length, width) {
        // Super methods calls the constructor of the parent class
        super(name)

        this.length = length;
        this.width = width;
     
    }
    area = function() {
            return this.length * this.width;
    }
    
    logName = function () {
        console.log('The name of shape is: ' + this.name);
    }
}



class Circle extends Shape{
    constructor(name, radius) {
        // Super methods calls the constructor of the parent class
        super(name)

        this.radius = radius;
     
    }
    area = function() {
            return this.length * this.width;
    }
    
    logName = function () {
        console.log('The name of shape is: ' + this.name);
    }
}



const rect = new Rectangle('Rect 1', 782, 83);

console.log(rect);
console.log(rect.length);
console.log(rect.width);
console.log(rect.area());
rect.logName();


const cir = new Circle('Circle 1', 360);
cir.logName();

console.log(rect instanceof Rectangle);
console.log(rect instanceof Shape);

console.log(cir instanceof Circle);
console.log(cir instanceof Rectangle);

class registerBeneficiary{
    constructor(name) {
      
        this.name = name;
    }
}

class beneficiaryProfile extends registerBeneficiary{
    constructor( name, age, sex) {
        super(name)
        
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
    beneficiaryDetails = function(){
        console.log('This is the profile: ' + this.name);
    }

}

const beneficiary = new beneficiaryProfile('Wangutusi', 25, 'Male');

console.log(beneficiary.beneficiaryDetails());

