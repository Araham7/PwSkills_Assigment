let cart = ["mango", "orange", "apple", "mango", "banana", "apple", "mango", "guava"];

function removeDuplicateItems(cartItems) {
    let uniqueCart = [...new Set(cartItems)];
    // console.log(uniqueCart);
    return uniqueCart;
}

let uniqueItemCart = removeDuplicateItems(cart);

console.log(uniqueItemCart);