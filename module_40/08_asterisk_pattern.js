/*

# (Q.8). 8. Inverted right-angled triangle pattern with asterisks:

## Write a program that takes an integer input i and prints an inverted right-angled triangle pattern of asteriskswith i rows.

*/


let num = 6;
function generatePattern(i) {
    for (i; i > 0; i--) {
        console.log("*".repeat(i));
    }
}

generatePattern(num);

