/*

(Q.3). Build a feature for Store's Inventory :---

Suppose a store has a list of items and their prices in US Dollars stored as an object. Create a JavaScript program to convert the prices to Indian Rupees using an exchange rate of 1 USD to 80 INR. The program should use the map higher-order function to create a new object with the converted prices in Rupees.

*/

const rupeesArr = { 
    item1: 1200 , item2: 1500 , item3: 2000 , item4: 2500 , item5: 3000 , item6: 3500 , item7: 4000 , item8: 4500 , item9: 5000 , item10: 5500 
}

// Exchange rate
const exchangeRate = 80; // 1 USD to INR

// Function to convert prices to INR
const convertToINR = (arr) => {
    return Object.fromEntries(
        Object.entries(arr).map(([item, price]) => {
            return [item, price * exchangeRate]; // Convert price to INR
        })
    );
};

// Convert rupeesArr prices to INR
const inventoryInINR = convertToINR(rupeesArr);

// Display the converted rupeesArr
console.log(inventoryInINR);
