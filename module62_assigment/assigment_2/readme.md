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
   node assigment_2.js

# assigment_1.js :---
```javaScript

const express = require('express');
const HOSTNAME = 'localhost';
const PORT = 7354;

const app = express();

let counter = 0;

app.get('/', (req, res) => {
    res.status(200);
    res.set('Content-Type', 'application/json');
    res.json({ counter });
});

app.get('/increment', (req, res) => {
    res.status(200);
    res.set('Content-Type', 'application/json');
    counter += 1;
    res.json({ counter });
});

app.get('/decrement', (req, res) => {
    res.status(200);
    res.set('Content-Type', 'application/json');
    counter -= 1;
    res.json({ counter });
});

app.get('*', (req, res) => {
    res.status(404);
    res.set('Content-Type', 'text/plain');
    res.send("Page not found!");
});

app.listen(PORT, () => {
    console.log(`Server is running at > ${HOSTNAME}:${PORT}`);
});


```

# Access the Server:
### Open your web browser or a tool like curl or Postman and navigate to:
   * `http://localhost:7354/` : to see the current counter value.
   * `http://localhost:7354/increment` : to increment the counter.
   * `http://localhost:7354/decrement` : to decrement the counter.
