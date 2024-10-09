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


