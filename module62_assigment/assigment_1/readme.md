# Node.js HTTP Server for Dummy Product Data

This Node.js script sets up a simple HTTP server that serves dummy data for men and women products. The server listens on port 9600 and provides different endpoints to retrieve this data.

## Prerequisites

- Node.js installed on your machine.

## Getting Started

1. **Clone or download the repository** (if applicable).

2. **Install Dependencies**: No external dependencies are required for this script. Ensure you have Node.js installed.

3. **Run the Server**:
   ```bash
   node assigment_1.js


# assigment_1.js :---
```javaScript

const http = require('http');
const PORT = 9600;
const HOSTNAME = "localhost";

// Sample data for men and women products
const menProducts = [
    { id: '1', name: "Men's T-Shirt", brand: "ABC", price: 19.99, color: "Blue", size: "M", category: "Clothing" },
    { id: '2', name: "Men's Jeans", brand: "XYZ", price: 39.99, color: "Black", size: "L", category: "Clothing" },
    // Add more products as needed (up to 10)
];

const womenProducts = [
    { id: '1', name: "Women's T-Shirt", brand: "DEF", price: 18.99, color: "Red", size: "S", category: "Clothing" },
    { id: '2', name: "Women's Jeans", brand: "GHI", price: 35.99, color: "White", size: "M", category: "Clothing" },
    // Add more products as needed (up to 10)
];

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify({ msg: "Welcome to Men & Women Dummy Data!" }));
        res.end();
    } else if (req.url === '/men') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify({ menProducts }));
        res.end();
    } else if (req.url === '/women') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify({ womenProducts }));
        res.end();
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.write("Page not found!");
        res.end();
    }
});

server.listen(PORT, () => {
    console.log(`Server is running at > ${HOSTNAME}:${PORT}`);
});

```

# Access the Server:
### Open your web browser or a tool like curl or Postman and navigate to:
   * `http://localhost:9600/` : to see a welcome message.
   * `http://localhost:9600/men` : to retrieve the list of men's products.
   * `http://localhost:9600/women` : to retrieve the list of women's products.
