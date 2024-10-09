/*

(Q.2). Only unique items are allowed :---

You are building a program that takes an array of numbers as input and you need to remove all the duplicates from the array. You want to write a function that can accomplish this task efficiently and returns a new set that contains only the unique elements.

*/

let myArray = [5 , 7 , 3 , 2 , 8 , 4 , 5 , 6 , 8 , 12 , 3 , 2 ,  8 , 5 ];

let uniqueElement = (arr)=>{
    return new Set(arr);
}

console.log(uniqueElement(myArray));


