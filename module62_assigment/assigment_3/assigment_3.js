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