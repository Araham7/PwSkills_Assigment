/*
1. Type Conversion:

Write a function called convertToNumber that takes a string as an argument and returns the equivalent number. If the string cannot be converted to a number, the function should return the string "Invalid number". Use error handling in javascript to achieve this output.
*/


let convertToNumber = (strNum)=> {
    let num = Number(strNum);
    if (!isNaN(num)) {
        return num;
    }
    return "Invalid Number";
}

console.log(convertToNumber("125"));
console.log(convertToNumber("abc"));

// console.log(typeof(Number("abc")));

