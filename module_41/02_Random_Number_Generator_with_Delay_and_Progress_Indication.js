/*
(Q.2). Random Number Generator with Delay and Progress Indication:---
The goal of this program is to generate a random number after a delay of 3 seconds, and store the delay in a variable so can be modified. The program displays a message every second indicating the time remaining until the random number is generated and then outputs the generated number.
*/

let randNumContainer = [];
let delay = 3;
const randomNum = Math.floor(Math.random()*10)+1;

const countDown = setInterval(() => {
    console.log(delay--);
    if (delay <= 0 ) {
        clearInterval(countDown);
        console.log(`Your Random number is > ${randomNum}`);
        randNumContainer.push(randomNum);
        console.log(randNumContainer);
    }
}, 1000);
