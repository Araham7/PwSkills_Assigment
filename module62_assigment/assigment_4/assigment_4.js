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



