/*

# (Q.7). Remove Duplicates:

## In an online shopping application, customers can add multiple items to their cart. However, sometimes customers accidentally add the same item more than once, resulting in duplicate items in their cart. The duplicate items not only make it difficult for the customer to track the items they want to purchase but also affect the accuracy of the purchase order. To solve this problem, the application needs to remove duplicate items from the customer's cart. The programshould take the customer's cart with duplicates as input, and return a new cart without duplicates. Write a program to solve the problem of duplicate items in the cart by removing duplicates.

*/


let cart = ["mango", "orange", "apple", "mango", "banana", "apple", "mango", "guava"];

function removeDuplicateItems(cartItems) {
    let uniqueCart = [...new Set(cartItems)];
    // console.log(uniqueCart);
    return uniqueCart;
}

let uniqueItemCart = removeDuplicateItems(cart);

console.log(uniqueItemCart);



