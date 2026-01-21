function first() {
    const x = 1000;

    function second() {
        const y = 5000;
        const add = y + x;
        console.log(add);
        //console.log(x + y);

    }
    //console.log(y);
    second(); // child scoped functions can be accessed under parent scopes
}

first(); // Parent scope can only be accessed by the parent


if (true) {
    const w = 100;
    
    if (w === 100) {
        const t = 150;
        console.log(w + t);
    }
   
}

