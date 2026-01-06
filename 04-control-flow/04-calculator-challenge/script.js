let result;



function calculator(num1, num2, operator) {
    switch (operator) {
        case '+':
        result = num1 + num2
            console.log('result');
            break;
        case '*':
            result = num1 + num2
            console.log('result');
            break;
        
        case '/':
            result = num1 / num2
            console.log('result');
            break;
        
        case '-':
            result = num1 - num2
            console.log('result');
            break;
        
        default: result = 'Invalid'
    }

    console.log(result);
    return result;
}

calculator(4, 5, '+');