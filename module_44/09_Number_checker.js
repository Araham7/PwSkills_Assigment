/*

9. Check the presence using closures:

Create a numberChecker function that takes an array of numbers as an argument and returns a function. The returned function should take another number as an argument and return true if the number is in the array, and false otherwise.

*/

let numberChecker = (numbers)=>{
    let isNumberPreasent = (num)=>{
        return numbers.includes(num);
    }
    return isNumberPreasent;
}

const checkNumbers = numberChecker([ 5 , 6 , 7 , 8 , 9 , 13 , 15 , 23 , 46 , 77 , 88 , 108 ]);

console.log(checkNumbers(5)); // OUTPUT: true
console.log(checkNumbers(32)); // OUTPUT: false
console.log(checkNumbers(15)); // OUTPUT: true
console.log(checkNumbers(512)); // OUTPUT: false

