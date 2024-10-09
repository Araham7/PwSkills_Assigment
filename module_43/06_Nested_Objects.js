/*

(Q.6). Nested Objects :---

Write a function that takes an object representing a person as input and extracts the name and street properties from a nested object using object destructuring. The function should return an object with these two properties. A sample object is given below.

*/

let person = {
    name: "Mithun",
    age: 21,
    address: {
        street: "B8, Block B, Industrial Area.",
        city: "Sector 62, Noida",
        state: "Uttar Pradesh"
    }
};

let extract = (obj) => {
    let { name, address: { street } } = obj;

    return { name, street };
};

let result = extract(person);

console.log(result);


