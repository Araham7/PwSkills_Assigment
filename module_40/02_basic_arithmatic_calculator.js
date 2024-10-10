/*
# (Q.2). Calculator:

## Create a javascript program that takes in two numbers and a string operator. Make use of a switch statement to perform the operation on the two numbers.The calculator function should"
- Take in two numbers, num1 and num2, and a string representing a mathematical operator, operator
- Use a switch statement to determine which operation to perform based on the value of the operator
- If the operator is one of the four valid operators (+, -, *, /), perform the corresponding mathematical operation and store the result in a variable called result
- If the operator is not one of the valid operators, log "Invalid operator" to the console.
*/


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