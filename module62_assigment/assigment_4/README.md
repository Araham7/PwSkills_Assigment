# Node.js Express Server with Counter Functionality

A simple Express.js server that provides basic routing, responds with plain text and JSON, and includes a random number generator.

## Prerequisites
- Node.js and npm installed on your machine.

## Getting Started
1. **Clone or download the repository** (if applicable).
     -Ensure you have Express installed. You can install it using npm:
     ```bash
     npm install express
     ```

3. **Run the Server**:
   ```bash
   node assigment_4.js

# assigment_3.js :---
```javaScript

const express = require('express');

const PORT = 4569 ;
const HOSTNAME = 'localhost' ;

const app = express();

// Function to generate a random integer between 0 and 100 (inclusive) :---
let randomNum = ()=>{
    return (Math.floor(Math.random()*101));
}

// Home page :---
app.get('/',(req , res)=>{
    res.status(200);
    res.header('content-type' , 'text/plain');
    res.send('This is home Page.');
})

// '/random' :---
app.get('/random',(req , res)=>{
    res.status(200);
    res.header('content-type' , 'application/json');
    random = randomNum();
    res.json({random});
});

app.get('*',(req , res)=>{
    res.status(404);
    res.header('content-type' , 'text/plain');
    res.send('Page not found!');
});

app.listen(PORT , ()=>{
    console.log(`Server is running at > ${HOSTNAME}:${PORT}`);
});

```

# Access the Server:
### Open your web browser or a tool like curl or Postman and navigate to:
   * `http://localhost:/`: Returns a JSON response with a message indicating the home page.
   * `http://localhost:/about` : Returns a JSON response with a message indicating the about page.
   * `http://localhost:7354/contact` : Returns a JSON response with an email address for support.
   * `http://localhost:7354/*` : Handles all other routes with a 404 response and a plain text message indicating the page was not found.
