// alert('hello);
// console.log(innerwidth);

const x = 100;

console.log(x, 'in glogabl');

function run (){
    //console.log(window.innerHeight);
    console.log(x, 'in function')
}

run();

if (true) {
    console.log(x, 'in block');
}


function add() {
    const y = 50;
    
    console.log(y);
}

// console.log(y); can not be accessed in a global scope because variable y is declared in a function scope.

add();

