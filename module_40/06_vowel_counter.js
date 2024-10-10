/*

# (Q.6). Vowel Counter:

## We want to count the number of vowels in a person's name. Given a name as input, the program should iterate through each character in the name, and check if it is a vowel or not. If the character is a vowel, it should be counted.

*/


function vowelCounter(name) {
let vowel = "aeiouAEIOU";
let count = 0;

for (let i = 0; i < name.length; i++) {
    if (vowel.includes(name[i])) {
        count++
    }
}
// console.log(count);
return count;
}

let userName = "ArahamAbeddin";

let numberOfVowel = vowelCounter(userName);

console.log(`Number of vowel in the userName = ${numberOfVowel}`);