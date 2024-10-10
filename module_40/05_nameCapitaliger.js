/*
# (Q.5). Capitalize:

## You are building a form where users can enter their names. You want to make sure that the first letter of the name is always capitalized, even if the user forgets to do so. Write a program that takes in the user's name as a string and uses the ternary operator to check if the first letter is lowercase. If it is, the program capitalizes it and returns the modified string. Otherwise, it returns the original string without any changes.
*/
let userName = "ArahamAbeddin"

// Check if the first letter is uppercase and the rest are lowercase
let isProperlyFormatted = userName[0].toUpperCase() === userName[0] && userName.slice(1) === userName.slice(1).toLowerCase();

// Capitalize the first letter and make the rest lowercase
let formattedUserName = userName[0].toUpperCase() + userName.slice(1).toLowerCase();

// If not properly formatted, update the userName
userName = isProperlyFormatted ? userName : formattedUserName;

console.log(userName);