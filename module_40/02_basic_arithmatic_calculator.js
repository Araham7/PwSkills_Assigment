function calculator(num1, num2, arithmaticOperator) {
    switch (arithmaticOperator) {
        case '+':
            console.log(num1 + num2);
            break;

        case '-':
            console.log(num1 - num2);
            break;

        case '*':
            console.log(num1 * num2);
            break;

        case '/':
            console.log(num1 / num2);
            break;

        default:
            console.log('Invalid operator');
            break;
    }
}

calculator(5, 6, "+"); // Addition
calculator(658, 35, "-"); // Subtraction
calculator(5, 6, "*"); // Multiplication
calculator(108, 6, "/"); // Division

calculator(562, 58, '!'); // Invalid operator