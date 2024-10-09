/*

6. Using Static Method to Add Two Numbers with Calculator Class :

Create a class called Calculator with a static method called add. The add method should take two numbers as arguments and return their sum. Instantiate the Calculator class and call the add method.

*/

class Calculator {
    constructor(num1 , num2) {
        this.num1 = num1;
        this.num2 = num2;
    }

    static add(num1 , num2){
        return (num1+num2);
    }
}
let result = Calculator.add(108 , 512);
console.log(result); // OUTPUT: 620