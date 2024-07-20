const express = require('express');
const HOSTNAME = 'localhost' ;
const PORT = 7354 ;

const app = express();

let counter = 0 ;

app.get('/' , (req , res)=>{
    res.status(200);
    res.set('content-type' , 'application/json');
    res.json({counter});
});
app.get('/increment' , (req , res)=>{
    res.status(200);
    res.set('content-type' , 'application/json');
    counter += 1 ;
    res.json({counter});
});
app.get('/decrement' , (req , res)=>{
    res.status(200);
    res.set('content-type' , 'application/json');
    counter -= 1 ;
    res.json({counter});
});
app.get('*' , (req , res)=>{
    res.status(404);
    res.set('content-type' , 'text/plain');
    res.send("Page not found !");
});

app.listen(PORT , ()=>{
    console.log(`Server is running at > ${HOSTNAME}:${PORT}`);
});