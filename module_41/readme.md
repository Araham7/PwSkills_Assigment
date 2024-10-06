# Q.1) <u>Reverse String :</u> The problem is to create a program that uses the setTimeout() function to reverse a given string after a delay of 2 seconds. The program should use a variable “input" storing a string as input and then implement a delay of 2 seconds before reversing the string. The reversed string should then be printed as output.

### Sol.
```javascript
let input = "Hello World!"

setTimeout(()=> {
    console.log(input.split("").reverse().join(""));
} , 2000);
```
### Output
```Output
!dlroW olleH
```
<hr>

# Q.2) <u>Random Number Generator with Delay and Progress Indication :</u> The goal of this program is to generate a random number after a delay of 3 seconds, and store the delay in a variable so can be modified. The program displays a message every second indicating the time remaining until the random number is generated and then outputs the generated number.

### Sol.
```javascript
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
```
### Output
```Output
3
2
1
Your Random number is > 8
[ 8 ]
```
<hr>

# Q.3) <u>Build a feature for Store's Inventory:</u> Suppose a store has a list of items and their prices in US Dollars stored as an object. Create a JavaScript program to convert the prices to Indian Rupees using an exchange rate of 1 USD to 80 INR. The program should use the map higher-order function to create a new object with the converted prices in Rupees.

### Sol.
```javascript
const rupeesArr = { 
    item1: 1200 , item2: 1500 , item3: 2000 , item4: 2500 , item5: 3000 , item6: 3500 , item7: 4000 , item8: 4500 , item9: 5000 , item10: 5500 
}

// Exchange rate
const exchangeRate = 80; // 1 USD to INR

// Function to convert prices to INR
const convertToINR = (arr) => {
    return Object.fromEntries(
        Object.entries(arr).map(([item, price]) => {
            return [item, price * exchangeRate]; // Convert price to INR
        })
    );
};

// Convert rupeesArr prices to INR
const inventoryInINR = convertToINR(rupeesArr);

// Display the converted rupeesArr
console.log(inventoryInINR);
```
### Output
```Output
{
  item1: 96000,
  item2: 120000,
  item3: 160000,
  item4: 200000,
  item5: 240000,
  item6: 280000,
  item7: 320000,
  item8: 360000,
  item9: 400000,
  item10: 440000
}
```
<hr>

# Q.4) <u>Filtering and Capitalizing:</u> Books Published After 2010 with Author Names.Write a program that takes a list of books,including their authors and publication years as input. The program should then filter out all books that were published before 2010 and create a new array with the remaining books, but with their author names capitalized.

### Sol.
```javascript

// Sample input array of books
const books = [
    { title: "Book One", author: "John Doe", year: 2009 },
    { title: "Book Two", author: "Jane Smith", year: 2011 },
    { title: "Book Three", author: "Emily Davis", year: 2015 },
    { title: "Book Four", author: "Michael Brown", year: 2008 },
    { title: "Book Five", author: "Sarah Wilson", year: 2020 }
];

// Function to filter books and capitalize author names
function filterAndCapitalizeBooks(books) {
    return books
        .filter(book => book.year > 2010) // Filter books published after 2010
        .map(book => {
            // Capitalize author name
            return {
                title: book.title,
                author: book.author.toUpperCase(),
                year: book.year
            };
        });
}

// Get the filtered and capitalized books
const filteredBooks = filterAndCapitalizeBooks(books);

// Output the result
console.log(filteredBooks);

```
### Output
```Output
[
  { title: 'Book Two', author: 'JANE SMITH', year: 2011 },
  { title: 'Book Three', author: 'EMILY DAVIS', year: 2015 },
  { title: 'Book Five', author: 'SARAH WILSON', year: 2020 }
]
```
<hr>

# 5. <u>URL validation:</u> Write a program using a regex that matches valid URLs. Valid URLs should start with either http:// or https://, followed by one or more letters, digits, or special characters, followed by a dot, followed by one or more letters.Print a message indicating if the input matches the conditions or not.

### Sol.
```javascript
// Function to validate URLs
function validateURL(url) {
    // Regular expression for validating the URL
    const urlRegex = /^(http:\/\/|https:\/\/)[a-zA-Z0-9._~:\/?#[\]@!$&'()*+,;=%-]+\.[a-zA-Z]+$/;

    // Test the URL against the regex
    if (urlRegex.test(url)) {
        console.log("The URL is valid.");
    } else {
        console.log("The URL is invalid.");
    }
}

// Sample URLs to test
const testURLs = [
    "http://example.com",
    "https://example.org",
    "http://sub.example.com/path/to/resource",
    "https://123.456.789.012",
    "ftp://example.com",          // Invalid
    "http://example",             // Invalid
    "http://example.com/path/",   // Valid
    "https://example.co.uk"       // Valid
];

// Validate each test URL
testURLs.forEach(url => validateURL(url));
```
### Output
```Output
The URL is valid.
The URL is valid.
The URL is invalid.
The URL is invalid.
The URL is invalid.
The URL is invalid.
The URL is invalid.
The URL is valid.
```
<hr>

# Q.6). LinkedIn Profile URL Validator: As a developer, you want to create a program that validates LinkedIn profile URLs to ensure that they are formatted correctly and contain only valid characters. Valid LinkedIn profile URLs should start with https://www.linkedin.com/in/ followed by a combination of one or more letters, digits, underscores, or hyphens, andend with a letter or digit. The length of the profile ID should be between 5 and 30 characters.The program should use a regular expression to match valid LinkedIn profile URLs, and should not match URLs that do not follow this format or contain invalid characters. The program should provide clear output messages indicating whether each input is a valid LinkedIn profile URL or not.

### Sol.
```Javascript 
// Function to validate LinkedIn profile URLs
function validateLinkedInURL(url) {
    // Regular expression for validating LinkedIn profile URLs
    const urlRegex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;

    // Test the URL against the regex
    if (urlRegex.test(url)) {
        console.log("The LinkedIn profile URL is valid.");
    } else {
        console.log("The LinkedIn profile URL is invalid.");
    }
}

// Sample URLs to test
const testURLs = [
    "https://www.linkedin.com/in/john-doe123", // Valid
    "https://www.linkedin.com/in/jane_doe",    // Valid
    "https://www.linkedin.com/in/johndoe",      // Valid
    "https://www.linkedin.com/in/johndoe!@#",    // Invalid
    "https://www.linkedin.com/in/joh",          // Invalid (too short)
    "https://www.linkedin.com/in/johndoe123456789012345678901234567890", // Invalid (too long)
    "http://www.linkedin.com/in/johndoe",       // Invalid (wrong protocol)
    "https://linkedin.com/in/johndoe"           // Invalid (missing www)
];

// Validate each test URL
testURLs.forEach(url => validateLinkedInURL(url));
```

### Output
``` Output
The LinkedIn profile URL is valid.
The LinkedIn profile URL is valid.
The LinkedIn profile URL is valid.
The LinkedIn profile URL is invalid.
The LinkedIn profile URL is invalid.
The LinkedIn profile URL is invalid.
The LinkedIn profile URL is invalid.
The LinkedIn profile URL is invalid.
```



