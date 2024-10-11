# (Q.1). Write a function called "addNumbers" that takes two numbers as arguments and returns their sum. Call the function before it is declared to demonstrate hoisting.

## Sol. (01_addNumbersHoisting.js)
```javascript
let sum = addNumbers(5 , 39);
console.log(sum);


function addNumbers(num1 , num2){
    return num1 + num2 ;
}let sum = addNumbers(5 , 39);
console.log(sum);


function addNumbers(num1 , num2){
    return num1 + num2 ;
}
```

## Output:
```Output
44
```

<hr>

# (Q.2). Write a function called "multiplyNumbers" that takes two numbers as arguments and returns their product.Use function expressions to define the function and call the function before it is declared to demonstrate hoisting.

## Sol. (02_multiplyNumbers_hoisting.js)
```javascript
let productResult = multiplyNumbers(56 , 10);
console.log(productResult);


let multiplyNumbers = function (num1 , num2) {
    return num1 * num2 ;
}
```

## Output:
```Output
ReferenceError: Cannot access 'multiplyNumbers' before initialization
```

<hr>

# (Q.3).Write a function that takes two numbers as arguments and returns their sum. Declare a variable inside the function using the var keyword and log its value to the console before it is assigned a value to demonstrate variable hoisting.

## Sol. (03_sumWithHoisting.js)
```javascript
function addNumbers(num1 , num2) {
    console.log(sum); // Output : undefined
    var sum = num1 + num2 ;
    return sum;
}

var sumResult = addNumbers(56 , 93);
console.log(sumResult); // Output: 149
```

## Output:
```Output
undefined
149
```

<hr>

# (Q.4). Declare three variables, one using let, one using var, and one using const, all inside a block scope. Assign them values and log their values to the console before and after they are declared to demonstrate variable hoisting.

## Sol. (04_hoisting_let_var_const_block_scope.js)
```javascript
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
```

## Output:
```Output
undefined
ReferenceError: Cannot access 'letVariable' before initialization
ReferenceError: Cannot access 'letVariable' before initialization
I am var
I am let
I am const
```

<hr>

# (Q.5). Declare a variable using let inside a block scope and attempt to log its value to the console before it is assigned a value to demonstrate the temporal dead zone.

## Sol. (05_temporalDeadZoneExample.js)
```javascript
{
    console.log(myVariable); // ReferenceError: Cannot access 'myVariable' before initialization.
    let myVariable = 108;
}
```

## Output:
```Output
ReferenceError: Cannot access 'myVariable' before initialization.
```