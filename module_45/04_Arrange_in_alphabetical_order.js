/*

(Q.4). Arrange in alphabetical order:

Write a program that accepts a list of objects representing books [ title, author, and year] and a callback function. The "program should use the map function to create a new list containing only the titles of the books", and then pass this new list to the callback function. The callback function should then log the titles to the console in alphabetical order.

*/



// function to log(i.e, to print) message. 
let messageLogger = (logMsg)=>{
    console.log(logMsg);
}

// Function to extract bookTitle from bookList :---
const extractBookTitel = (bookList)=>{
    let bookAuthers =  bookList.map((listItem)=>{
        return listItem["title"];
    })
    return messageLogger(bookAuthers);
}




// Example :---
const bookList = [
    { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 }
];

extractBookTitel(bookList);



