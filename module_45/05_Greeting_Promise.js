/*

(Q.5). Greeting Promise:

You need to write a function that takes a name as input and returns a promise that resolves with a greeting message. The function should greet the person using their name, with a message in the format "Hello, {name}!".

For example, if the input to the function is "Mithun", the promise should resolve with the string "Hello, Mithun!".

*/

let greetUser = function(name) {
    return new Promise((resolve) => {
        resolve(`Hello, ${name}!`);
    });
};

// Usage example
greetUser("Mithun")
    .then((message) => console.log(message));  // Output: Hello, Mithun!


/*
// Another method:

// This function will take decision in "yes" or "no" :---
let decision = () => {
    let randomNum = Math.floor(Math.random() * 10 + 1);
    return randomNum % 2 === 0 ? "yes" : "no";
};

// Modified greetUser function to pass the 'name' correctly
let greetUser = function(name) {
    let myPromise = new Promise((resolve, reject) => {
        if (decision() === "yes") {
            resolve(`Hello, ${name}!`);
        } else {
            reject("Promise got rejected!");
        }
    });

    return myPromise
                    .then((res) => console.log(res))
                    .catch((rej) => console.log(rej));
};

let result = greetUser("Araham");
console.log(result);
*/