// Parent scope
function sum() {
    const sem1 = 350;
    const sem2 = 452;
    const year1Results = sem1 + sem2;
    
    console.log(year1Results)
    
    // Nested child scope
    function sum2() {
        const sem3 = 780;
        const sem4 = 680;
        const year2Results = sem3 + sem4
        console.log(year2Results)
    }
    sum2(); // child scoped functions can be accessed under parent scopes
}
sum(); // Parent scope can only be accessed by the parent


