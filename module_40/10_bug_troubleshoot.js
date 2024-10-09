function doubleCartQuantities(cart) {
    for (let i = 0; i < cart.length; i++) {
        cart[i] *= 2; // Double the quantity of each item
    }
    return cart; // Return the updated cart
}

// Example usage:
const cartQuantities = [3, 6, 9, 12, 15, 22, 25, 27, 30, 45, 53, 67, 70, 89 ]; // Original quantities
const correctedCart = doubleCartQuantities(cartQuantities);

console.log(correctedCart); 
// Output:[ 6,  12, 18, 24,  30,  44, 50,  54, 60, 90, 106, 134, 140, 178 ]