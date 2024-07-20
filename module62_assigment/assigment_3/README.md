# Node.js Express Server with Counter Functionality

This Node.js script sets up an Express server that provides endpoints for managing a counter. The server listens on port 7354 and includes routes to get the current counter value, increment and decrement the counter, and handle 404 errors.

## Prerequisites

- Node.js and npm installed on your machine.

## Getting Started

1. **Clone or download the repository** (if applicable).

2. **Install Dependencies**:
   ###Ensure you have Express installed. You can install it using npm:
     ```bash
     npm install express
     ```

3. **Run the Server**:
   ```bash
   node assigment_3.js

# assigment_3.js :---
```javaScript

const express = require('express');

const PORT = 3698 ;
const HOSTNAME = 'localhost' ;

const app = express();

// home
app.get('/' , (req , res)=>{
    res.status(200);
    res.header('content-type' , 'application/json');
    // res.set('content-type' , 'application/json');
    res.json({msg:`I am home page`});
});

// about
app.get('/about' , (req , res)=>{
    res.status(200);
    res.header('content-type' , 'application/json');
    // res.set('content-type' , 'application/json');
    res.json({msg:`I am about page`});
});

// contact
app.get('/contact' , (req , res)=>{
    res.status(200);
    res.header('content-type' , 'application/json');
    // res.set('content-type' , 'application/json');
    res.json({email:`support@pwskills.com`});
});

app.get('*' , (req , res)=>{
    res.status(404);
    res.header('content-type' , 'text/plain');
    // res.set('content-type' , 'text/plain');
    res.send("Page not found !");
});

app.listen(PORT , ()=>{
    console.log(`Server is running @ > ${HOSTNAME}:${PORT}`);
})

```

# Access the Server:
### Open your web browser or a tool like curl or Postman and navigate to:
   * `http://localhost:/`: Returns a JSON response with a message indicating the home page.
   * `http://localhost:/about` : Returns a JSON response with a message indicating the about page.
   * `http://localhost:7354/contact` : Returns a JSON response with an email address for support.
   * `http://localhost:7354/*` : Handles all other routes with a 404 response and a plain text message indicating the page was not found.
