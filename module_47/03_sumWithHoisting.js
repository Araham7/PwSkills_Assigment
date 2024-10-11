/*

(Q.3).Write a function that takes two numbers as arguments and returns their sum. Declare a variable inside the function using the var keyword and log its value to the console before it is assigned a value to demonstrate variable hoisting.

*/


function addNumbers(num1 , num2) {
    console.log(sum); // Output : undefined
    var sum = num1 + num2 ;
    return sum;
}

var sumResult = addNumbers(56 , 93);
console.log(sumResult); // Output: 149