/*

# (Q.17). Build a banking application:

## A banking application needs to manage customer accounts and transactions. The user detail is stored in an object with a keys name and balance. Write functions using object methods to update a customer's account balance based on a deposit or withdrawal.

*/


customer = {
    name: "araham",
    balance: 0,

    deposit(b) {
        if (this.balance >= 0) {
            this.balance += b;
        }else{
            console.log(`Invalid deposit Amount!`);
        }
    },
    witdraw(w) {
        if (this.balance >= w) {
            this.balance -= w;
        } else {
            console.log(`You don't have sufficient balance to withdrow!`);
        }
    },
    checkBalance(){
        console.log(`Your current balance is : ${this.balance}`);
    }

}

customer.checkBalance(); // Your current balance is : 0

customer.deposit(150000);

customer.checkBalance(); // Your current balance is : 150000

customer.witdraw(120000);

customer.checkBalance(); // Your current balance is : 30000




