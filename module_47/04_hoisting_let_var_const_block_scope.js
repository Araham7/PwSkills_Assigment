/*

(Q.4). Declare three variables, one using let, one using var, and one using const, all inside a block scope. Assign them values and log their values to the console before and after they are declared to demonstrate variable hoisting.

*/

{
    // Trying to access variables before declaration
    console.log(varVariable);  // Undefined due to hoisting
    console.log(letVariable);  // ReferenceError: Cannot access 'letVariable' before initialization
    console.log(constVariable);  // ReferenceError: Cannot access 'constVariable' before initialization
  
    var varVariable = "I am var";
    let letVariable = "I am let";
    const constVariable = "I am const";
  
    // Accessing variables after declaration
    console.log(varVariable);  // I am var
    console.log(letVariable);  // I am let
    console.log(constVariable);  // I am const
  }








  