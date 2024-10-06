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
