/*

# (Q.15). Calculate the percentage of the discount:

## A retail store is offering a discount on its products and wants to calculate the percentage of the discount to show customers how much they can save. Given the original price and the discounted price of a product, implement an arrow function to calculate the percentage of the discount rounded off to two decimal places.This function could be useful for the store's marketing team to create promotions and offers that attract customers.

*/


let CalculatorDiscountAmountAndPercent = (origionalPrice , discountedPrice)=>{
    let discountAmount = (origionalPrice - discountedPrice);
    let percentDiscount = ((discountAmount/origionalPrice)*100).toFixed(2);

    return {
        discountAmount: discountAmount ,
        percentDiscount: `${percentDiscount} %`
    }
}

let result = CalculatorDiscountAmountAndPercent(196 , 135);
console.log(result);



// const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
//     let discount = originalPrice - discountedPrice;
//     let discountPercentage = (discount / originalPrice) * 100;
//     return discountPercentage.toFixed(2); // rounding to two decimal places
//   };
  
//   // Example usage:
//   console.log(calculateDiscountPercentage(100, 80)); // Output: 20.00
  