/*

# (Q.13). Bill splitter:

## A restaurant wants to calculate the total bill for a table based on the cost of each dish and the number of people sharing it. They require a function that takes in the cost of each dish and the number of people sharing it and returns an object that contains the total bill and the bill to be paid by each person in the group.

*/


function billSplitter(dishes, numberOfPerson) {
    let totalBill = 0;

    // Using a for loop to calculate total bill
    for (let i = 0; i < dishes.length; i++) {
        totalBill += dishes[i];
    }

    let billPerPerson = numberOfPerson >0 ? (totalBill / numberOfPerson) : 0;

    return {
        totalBill: totalBill,
        billPerPerson: billPerPerson
    };
}

// Sample input
const dishes = [55, 68, 89, 108, 507, 312, 512, 782, 659];

let result = billSplitter(dishes, 5);

console.log(result);


