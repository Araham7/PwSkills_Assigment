/*

(Q.1). Double using callback:

Write a function that takes in an array of integers and a callback function, and returns a new array where each element is doubled using the callback.

*/


// Function to double the array elements:
let dbl = (arr) => {
    let res = []; // This is the array to store doubleArrayElement of element .
    [...arr].map((item) => {
        res.push(item * 2);
    });
    return res;
}

// Callback function:
let cb = (fx, arr) => {
    return fx(arr);
}

// example :---

let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let result = cb(dbl, myArr);
console.log(result);


