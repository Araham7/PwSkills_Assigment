const http = require('http');
const PORT = 9600 ;
const HOSTNAME = "localhost" ;

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


const server = http.createServer((req , res)=>{
    if (req.url === '/') {
        res.statusCode = 200 ;
        res.setHeader('content-type' , 'application/json');
        res.write(JSON.stringify({msg: "Welcome to Men & Women Dummy Data!"}));
        res.end();
    } else if(req.url==='/men'){
        res.statusCode = 200 ;
        res.setHeader('content-type' , 'application/json');
        res.write(JSON.stringify({menProducts}));
        res.end();
    } else if(req.url==='/women'){
        res.statusCode = 200 ;
        res.setHeader('content-type' , 'application/json');
        res.write(JSON.stringify({womenProducts}));
        res.end();
    } else {
        res.statusCode = 404 ;
        res.setHeader('content-type' , 'text/plain');
        res.write("Page not found!");
        res.end();
    }
});

server.listen(PORT , ()=>{
    console.log(`Server is running at > ${HOSTNAME}:${PORT}`);
});




