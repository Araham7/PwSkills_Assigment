/*

(Q.4). Arrange in alphabetical order:

Write a program that accepts a list of objects representing books [ title, author, and year] and a callback function. The "program should use the map function to create a new list containing only the titles of the books", and then pass this new list to the callback function. The callback function should then log the titles to the console in alphabetical order.

*/


// Function to log the book titles in alphabetical order
const logBookTitlesInAlphabeticalOrder = (titles) => {
    console.log('Book Titles in Alphabetical Order:');
    console.log(titles.sort());
}

// Function to extract titles from a list of books
const extractAndLogBookTitles = (books) => {
    const bookTitles = books.map((book) => book.title);
    return logBookTitlesInAlphabeticalOrder(bookTitles);
}

// Example list of books
const bookList = [
    { title: 'Kite Runner', author: 'Khaled Hosseini', year: 2003 },
    { title: 'Adventures of Huckleberry Finn', author: 'Mark Twain', year: 1884 },
    { title: 'Great Expectations', author: 'Charles Dickens', year: 1861 },
    { title: 'Invisible Man', author: 'Ralph Ellison', year: 1952 },
    { title: 'Don Quixote', author: 'Miguel de Cervantes', year: 1605 },
    { title: 'Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
    { title: 'Emma', author: 'Jane Austen', year: 1815 },
    { title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
    { title: 'Fahrenheit 451', author: 'Ray Bradbury', year: 1953 },
    { title: 'Heart of Darkness', author: 'Joseph Conrad', year: 1899 },
    { title: 'Moby-Dick', author: 'Herman Melville', year: 1851 },
    { title: 'Lord of the Flies', author: 'William Golding', year: 1954 },
    { title: 'Jane Eyre', author: 'Charlotte Brontë', year: 1847 },
];

// Calling the function to extract and log book titles
extractAndLogBookTitles(bookList);



