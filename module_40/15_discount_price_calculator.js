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
  