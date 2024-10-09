/*

7. Password Checker:

Create a class called User with properties username and password. Implement a getter method for password that returns the password with all characters replaced by asterisks. Implement a setter method for password that checks if the new password is at least 8 characters long and contains at least one number and one uppercase letter. If the password is valid, set the new password. If not, log an error message.

*/

class User {
    #password;
    constructor(username , password) {
        let asterisksPassword = "";
        let passwordHide = (password)=>{
        for(let i = 0; i < password.toString().length; i++) {
            asterisksPassword += "*";
        }
        return asterisksPassword;
        }

        this.username = username;
        this.#password = passwordHide(password);

    }

    get getPassword(){
        return this.#password;
    }

    set setPassword(password){
        if (password.toString().length >= 8) {
            try {
                const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
                let isValidPassword = passwordRegex.test(password.toString());
                
                if(isValidPassword){
                    this.#password = password
                }else{
                    throw new Error("Invalid Password!");
                }
            } catch (error) {
                error.message;
            }
        }else{
            console.log("Password should be at least 8 characters long and contains at least one number and one uppercase letter");
        }
    }
}

let user1 = new User("Araham" , 2654556460);
console.log(user1.getPassword); // OUTPUT: **********

user1.setPassword = "Araham7546"; // This will set the password in "user1".

console.log(user1.getPassword); // OUTPUT: Araham7546

user1.setPassword = "abcd" // OUTPUT: Password should be at least 8 characters long and contains at least one number and one uppercase letter

console.log(user1.password); // OUTPUT: undefined

