/*
2. Building Robust Functions in JavaScript

Create a function called getPerson that takes an object as a parameter representing a person's name and age. The function should return the person's name and age as a string in the format "Name: <name>, Age: <age>". However, if the parameter is not a valid object with the properties "name" and "age", the function should throw an error with the message "Invalid parameter type". Use try-catch to handle this error and return the error
message if it occurs.
*/



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


