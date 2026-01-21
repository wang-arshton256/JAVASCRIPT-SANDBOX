
function myProfile(name, age, nationality) {
    const details = (`My name is ${name}, I am ${age} years old & of ${nationality} origin.`)
    console.log(details);

    function myAddress(state, parish, pin) {
        const addressDetails = (`I live at ${parish}, located in ${state} at ${pin} `)
         console.log(addressDetails);
    }
    myAddress('Kampala', 'Bweyogerere', 1254797)
   
}
myProfile('wang', 28, 'Ugandan');