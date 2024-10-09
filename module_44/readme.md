# (Q.1). Type Conversion:

## Write a function called convertToNumber that takes a string as an argument and returns the equivalent number. If the string cannot be converted to a number, the function should return the string "Invalid number". Use error handling in javascript to achieve this output.


### Sol.
```Javascript
let convertToNumber = (strNum)=> {
    let num = Number(strNum);
    if (!isNaN(num)) {
        return num;
    }
    return "Invalid Number";
}

console.log(convertToNumber("125"));
console.log(convertToNumber("abc"));
```

### OUTPUT:
``` Output 
125
Invalid Number
```

<hr>


# (Q.2). Building Robust Functions in JavaScript:

## Create a function called getPerson that takes an object as a parameter representing a person's name and age. The function should return the person's name and age as a string in the format "Name: <name>, Age: <age>". However, if the parameter is not a valid object with the properties "name" and "age", the function should throw an error with the message "Invalid parameter type". Use try-catch to handle this error and return the error message if it occurs.


### Sol.
```Javascript
let p1 = {
    name: "Mithun",
    age: 20
};
let p2 = {
    name: "Mithun"
};
let p3 = ["name","Mithun"];

let getPerson = (obj)=>{
    try {
        let {name , age} = obj
    if((typeof(obj)==='object') && (obj !== null) && ('name' in obj) && ('age' in obj)){
        return `Name: ${name}, Age: ${age}`
    }else{
        throw new Error("Invalid parameter type");
    }
    } catch (error) {
        return error.message;
    }
}

console.log(getPerson(p1)); // Name: Mithun, Age: 20
console.log(getPerson(p2)); // Invalid parameter type
console.log(getPerson(p3)); // Invalid parameter type
```

### OUTPUT:
``` Output 
Name: Mithun, Age: 20
Invalid parameter type
Invalid parameter type
```

<hr>

# (Q.3). Car Description Class.

## Create a class called Car with three properties: company, model, and year. The class should have a method called getDescription that returns a string in the format "This is a <year> <company> <model>". Instantiate an instance of the Car class and call the getDescription method.


### Sol.
```Javascript
class Car  {
    constructor(company , model , year) {
        this.company = company,
        this.model = model,
        this.year = year
    }

    getDescription() {
        return `This is a ${this.year} ${this.company} ${this.model}.`;
    }
}

let myCar = new Car("Skoda" , "Rapid" , 2022);
console.log(myCar.getDescription()); //OUTPUT : This is a 2022 Skoda Rapid.
```

### OUTPUT:
```OUTPUT
This is a 2022 Skoda Rapid.
```

<hr>

# (Q.4).Employee Class Challenge:
## Create a class called Employee with three properties: name, position, and salary. The class should have a method called getSalary that returns the employee's salary. Instantiate an instance of the Employee class and call the getSalary method.

### Sol.
```Javascript
class Employee {
    constructor(name, position, salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }

    getSalary(){
        return this.salary;
    }
}

let employee1 = new Employee("Araham" , "Manager" , 150000);


console.log(employee1.getSalary());
```

### OUTPUT:
```OUTPUT
150000
```

<hr>

# (Q.5). Implementing a Person Class with Default Values
## Create a class called Person with two properties: name and age. The class should have a method called getDetails that returns a string in the format "Name: <name>, Age: <age>". Use default parameters in the constructor to set the values of name and age to "Unknown" and 0 if they are not provided.

### Sol.
```Javascript
class Person {
    constructor( name = "Unknown" , age = 0) {
        this.name = name;
        this.age = age;
    }

    getDetailes(){
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

const p1 = new Person("Araham" , 20);
console.log(p1); // OUTPUT: Person { name: 'Araham', age: 20 }

const p2 = new Person();
console.log(p2); // OUTPUT: Person { name: 'Unknown', age: 0 }
```

### OUTPUT:
```OUTPUT
Person { name: 'Araham', age: 20 }
Person { name: 'Unknown', age: 0 }
```

<hr>

# (Q.6). Using Static Method to Add Two Numbers with Calculator Class :

## Create a class called Calculator with a static method called add. The add method should take two numbers as arguments and return their sum. Instantiate the Calculator class and call the add method.

### Sol.
```Javascript 
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
```

### OUTPUT:
```OUTPUT
620
```

<hr>

# (Q.7). Password Checker:

## Create a class called User with properties username and password. Implement a getter method for password that returns the password with all characters replaced by asterisks. Implement a setter method for password that checks if the new password is at least 8 characters long and contains at least one number and one uppercase letter. If the password is valid, set the new password. If not, log an error message.

### Sol.

```Javascript
class User {
    #password;
    constructor(username , password) {
        let asterisksPassword = "";
        let passwordHide = (password)=>{
        for(let i = 0; i < password.toString().length; i++) {
            asterisksPassword += "*";
        }
        return asterisksPassword;
        }

        this.username = username;
        this.#password = passwordHide(password);

    }

    get getPassword(){
        return this.#password;
    }

    set setPassword(password){
        if (password.toString().length >= 8) {
            try {
                const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
                let isValidPassword = passwordRegex.test(password.toString());
                
                if(isValidPassword){
                    this.#password = password
                }else{
                    throw new Error("Invalid Password!");
                }
            } catch (error) {
                error.message;
            }
        }else{
            console.log("Password should be at least 8 characters long and contains at least one number and one uppercase letter");
        }
    }
}

let user1 = new User("Araham" , 2654556460);
console.log(user1.getPassword); // OUTPUT: **********

user1.setPassword = "Araham7546"; // This will set the password in "user1".

console.log(user1.getPassword); // OUTPUT: Araham7546

user1.setPassword = "abcd" // OUTPUT: Password should be at least 8 characters long and contains at least one number and one uppercase letter

console.log(user1.password); // OUTPUT: undefined
```

<hr>

# (Q.8).Adding a Method to a Prototype:

## Create a prototype object called Student with a property name. Add a method called printDetails to the prototype that logs the string "Hello, my name is {name}" to the console. Instantiate a Student object with the name "Mithun" and call the printDetails method.

### Sol.
```Javascript
// Create the Student prototype
function Student(name) {
    this.name = name;
}

// Add the printDetails method to the Student prototype
Student.prototype.printDetails = function() {
    console.log(`Hello, my name is ${this.name}`);
};

// Instantiate a Student object with the name "Mithun"
const student1 = new Student("Mithun");

// Call the printDetails method
student1.printDetails(); // Output: Hello, my name is Mithun
```

### OUTPUT:
```OUTPUT
Hello, my name is Mithun
```

<hr>

# (Q.9). Check the presence using closures:

## Create a numberChecker function that takes an array of numbers as an argument and returns a function. The returned function should take another number as an argument and return true if the number is in the array, and false otherwise.

### Sol.
```Javascript
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
```

### OUTPUT:
```OUTPUT
true
false
true
false
```

<hr>

# (Q.10). Filter by Category:

## Write a function that takes an array of products and returns a function that filters the array by a given product category. The function must filter an eCommerce products array by a specific category. The closure filters products using the filter() method. Finally, it returns a new array containing only the products with the same category as the input.

### Sol.
```Javascript
// Product Array :---
let products = [
    { name: "Shirt", category: "Clothing" },
    { name: "Pants", category: "Clothing" },
    { name: "Hat", category: "Accessories" },
    { name: "Sunglasses", category: "Accessories" }
];

// filter by category :---
const filterByCategory = (products)=>{
    return function (category) {
        let matchedCategoryProduct = products.filter((product)=>{
            return product.category === category;
        })
        return matchedCategoryProduct;
    }
}


let clothingProducts = filterByCategory(products)("Clothing");

console.log(clothingProducts); // Output: [{ name: "Shirt", category: "Clothing" }, { name: "Pants", category: "Clothing" }]
```

### OUTPUT:
```OUTPUT
[
  { name: 'Shirt', category: 'Clothing' },
  { name: 'Pants', category: 'Clothing' }
]
```
