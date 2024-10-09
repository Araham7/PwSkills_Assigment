// let userName = prompt("Enter userName > ");

let userName = "ArahamAbeddin"

// Check if the first letter is uppercase and the rest are lowercase
let isProperlyFormatted = userName[0].toUpperCase() === userName[0] && userName.slice(1) === userName.slice(1).toLowerCase();

// Capitalize the first letter and make the rest lowercase
let formattedUserName = userName[0].toUpperCase() + userName.slice(1).toLowerCase();

// If not properly formatted, update the userName
userName = isProperlyFormatted ? userName : formattedUserName;

console.log(userName);