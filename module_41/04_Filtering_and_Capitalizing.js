/*
(Q.4). Filtering and Capitalizing: 

Books Published After 2010 with Author Names.Write a program that takes a list of books,including their authors and publication years as input. The program should then filter out all books that were published before 2010 and create a new array with the remaining books, but with their author names capitalized.
*/




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


