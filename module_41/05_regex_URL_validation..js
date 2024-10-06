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


