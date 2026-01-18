const itemInput = document.getElementById('item-input');

const onKeyPress = (e) => {
    console.log('keypress');

};

const onKeyUp = (e) => {
    console.log('keyup');
};

const onKeyDown = (e) => {
    //  key
    console.log(e.key); // logs every key entered
   
    // Alert on press Enter
    if (e.key === 'Enter') {
        alert('You pressed enter'
        );
    }
    
    // keyCode
    // https://www.toptal.com/developers/keycode/table-of-all-keycodes
    if (e.code === 13) {
        alert('You pressed enter');
    }

    // code
    if (e.code === 'Digit1') {
        console.log('You pressed 1')  
    }

    // if you hold a key, it will log true
    if (e.repeat) {
        console.log('You are holding down ' + e.key);
    }

    // logs if these keys are pressed
    console.log('Shift: ' + e.shiftKey);
    console.log('Control: ' + e.shiftKey);
    console.log('Alt: ' + e.shiftKey);

    // logs if you press skift + K
    if (e.shiftKey && e.key === 'K') {
        console.log('You hit shift + K')
    }
};





    // itemInput.addEventListener('keypress', onKeyPress);
    // itemInput.addEventListener('keyup', onKeyUp);
    itemInput.addEventListener('keydown', onKeyDown);