/*
(Q.1). Password Validator:

Write a JavaScript program that checks if the entered password matches the confirmed password. If the passwords match, the program should log "Password Matched. Password validation Successful." to the console.Otherwise, it should log "Password didn't match. Password validation unsuccessful" to the console.
*/

function passwordValidator(password , confirmPassword) {
    if (password === confirmPassword) {
        console.log(`Password Matched. Password validation Successful.`);
    } else {
        console.log(`Password didn't match. Password validation unsuccessful.`);
    }
}

/*
// Uncomment this code to get input from the user :---
const password = prompt("Enter the password!");
const confirmPassword = prompt("Enter the confirmPassword!");
*/

const password1 = "00001111";
const confirmPassword1 = "00001111";

passwordValidator(password1 , confirmPassword1); // OUTPUT: Password Matched. Password validation Successful.


const password2 = "12345";
const confirmPassword2 = "12348";
passwordValidator(password2 , confirmPassword2); // OUTPUT: Password didn't match. Password validation unsuccessful.
