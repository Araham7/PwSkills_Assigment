/*
(Q.1). Write a function called "addNumbers" that takes two numbers as arguments and returns their sum. Call the function before it is declared to demonstrate hoisting.
*/


let sum = addNumbers(5 , 39);
console.log(sum);


function addNumbers(num1 , num2){
    return num1 + num2 ;
}

