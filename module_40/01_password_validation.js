function passwordValidator(password , confirmPassword) {
    if (password === confirmPassword) {
        console.log(`Password Matched. Password validation Successful.`);
    } else {
        console.log(`Password didn't match. Password validation unsuccessful.`);
    }
}

const password = prompt("Enter the password!");
const confirmPassword = prompt("Enter the confirmPassword!");

passwordValidator(password , confirmPassword);


