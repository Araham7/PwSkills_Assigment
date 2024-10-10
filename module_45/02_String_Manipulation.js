/*

(Q.2). String Manipulation:

Write a function “manipulateString” that takes in a string and converts the characters to uppercase letters. The function should return a callback function “logString” that logs the sentence “The manipulated string is: “ along with the manipulated string or the new string to the console."

*/



let logString = function (strToBeLog) {
    console.log(strToBeLog);
}

let manipulateString = (str)=>{
    let strUppercase = str.toUpperCase();
    return logString(strUppercase);
}



// Example :
let strToBeMenupulated = "along with the manipulated string or the new string to the console.";

manipulateString(strToBeMenupulated);




