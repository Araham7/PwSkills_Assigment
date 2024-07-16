const fs = require('fs');

const textToAppend = `Compared to other server-side languages, Node js has distinct advantages. Its asynchronous model and non-blocking I/O operation improve the scalability and performance of web applications built on other frameworks. Node js can easily handle multiple client requests without requiring multiple threads, consuming less memory and resources. Additionally, it is highly scalable and provides high performance. Node js is also flexible with multiple frameworks and makes the development process easier.` 

// Asynchronously append text to a file :---
fs.appendFile('nodejs_architecture.txt', textToAppend , (err) => {
    if (err) {
        console.error('Error appending to the file:', err);
        return;
    }
    console.log('Text appended successfully!');
});

// Reading the modified file :---
    fs.readFile('nodejs_architecture.txt' , 'utf-8', (err , data)=>{
        if (err) {
            console.log(`Error reading the file > ${err}`);
            return
        }
        console.log(`Modified file Content > ${data}`);
    } );
