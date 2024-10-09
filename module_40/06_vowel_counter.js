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

let userName = "ArahamAbeddin"

let numberOfVowel = vowelCounter(userName);

console.log(`Number of vowel in the userName = ${numberOfVowel}`);