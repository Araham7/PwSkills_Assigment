# index.js :---
```index.js
const http = require('http');

const PORT = 3022;
const HOSTNAME = 'localhost';

const server = http.createServer((req, res) => {
    if (req.url == '/') { 
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>I Am Happy To Learn Full Stack Web Development From PW Skills!</h1>');
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Not Found');
    }
});

server.listen(PORT, () => {
    console.log(`Server is running at > ${HOSTNAME}:${PORT}`);
});


```

# OUTPUT :---
<img src="./Assigment_7.png" alt="OUTPUT" title="Assigment_7_Output">
