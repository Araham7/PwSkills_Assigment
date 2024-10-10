/*

# (Q.12). A car rental company needs to calculate the cost of a rental based on the number of days rented and the type of car. They require a function that takes in the number of days rented and car type and returns the rental cost. The total cost would be the rental cost multiplied by the number of days rented. 
### The rental costs are:
- Economy = Rs. 4,000/- per day.
- Midsize = Rs. 10,000/- per day.
- Luxury = Rs. 20,000/- per day.

*/

function calculateRentalCost(carType , day) {
    switch (carType) {
        case "Economy":
            console.log();
            return 4000*day;
            break;

            case "Midsize":
            return 10000*day;
            break;

            case "Luxury":
            return 20000*day;
            break;

        default:
            return "You selected wrong cartype";
            break;
    }
}

// Example usage :---
let totalCost = calculateRentalCost("Economy" , 55);

console.log(totalCost); // OUTPUT : 220000





