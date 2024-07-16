# index.js :---
```index.js
const fs = require('fs');

// Reading the modified file :---
    fs.readFile('./nodejs_architecture.txt' , 'utf-8', (err , data)=>{
        if (err) {
            console.log(`Error reading the file > ${err}`);
            return
        }
        console.log(`Modified file Content > ${data}`);
    } );


```

# nodejs_architecture.txt :---
```nodejs_architecture.txt
    Node.js is a platform that utilizes JavaScript and is primarily employed for developing web applications that are highly focused o n input/output operations, including but not limited to chat applications and multimedia streaming websites. The platform is const ructed using Google Chrome's V8 JavaScript engine. A web application is a type of software that executes on a server and is displa yed by a client's browser that obtains all the application's resources over the internet.Compared to other server-side languages, Node js has distinct advantages. Its asynchronous model and non-blocking I/O operation improve the scalability and performance of web applications built on other frameworks.

```


# OUTPUT :---
<img src="Assigment_3.png" alt="OUTPUT OF Assigment 3" title="Assigment 3 photo">
