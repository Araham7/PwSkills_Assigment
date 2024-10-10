/*

# (Q.14). Calculate the final order price:

## A retail store needs to calculate the total cost of items in a customer's cart. A customer cart is an array of objects with unit price and quantity. Implement an arrow function to calculate the total cost of items, based on the unit price and quantity of each item.

*/


const customerCart = [
  { unitPrice: 50, quantity: 2 },
  { unitPrice: 100, quantity: 1 },
  { unitPrice: 25, quantity: 4 }
];

function calateTotalPrice(cart) {
    let totalPrice = 0 ;
    for (let i = 0; i < cart.length; i++) {
      // totalPrice += ((cart[i]["unitPrice"])*(cart[i]["quantity"]));
        totalPrice += ((cart[i].unitPrice)*(cart[i].quantity));
      }
      return totalPrice;
}

let totalPrice = calateTotalPrice(customerCart);
console.log(totalPrice);


