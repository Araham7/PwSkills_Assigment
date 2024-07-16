# index.js :---
```index.js
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

```

# nodejs_architecture.txt :---
```nodejs_architecture.txt
Node.js is a platform that utilizes JavaScript and is primarily employed for developing web applications that are highly focused o n input/output operations, including but not limited to chat applications and multimedia streaming websites. The platform is const ructed using Google Chrome's V8 JavaScript engine. A web application is a type of software that executes on a server and is displa yed by a client's browser that obtains all the application's resources over the internet.Compared to other server-side languages, Node js has distinct advantages. Its asynchronous model and non-blocking I/O operation improve the scalability and performance of web applications built on other frameworks. Node js can easily handle multiple client requests without requiring multiple threads, consuming less memory and resources. Additionally, it is highly scalable and provides high performance. Node js is also flexible with multiple frameworks and makes the development process easier.
```


# before_modification(before running the code) :---
<img src="Assigment_4_before_modification.png" alt="OUTPUT before running the code" title="Assigment_4_before_modification.png">

# after_modification(after running the code) :---
<img src="Assigment_4_after_modification.png" alt="OUTPUTafter running the code" title="Assigment_4_after_modification.png">