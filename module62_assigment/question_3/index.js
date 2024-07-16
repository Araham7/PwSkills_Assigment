const fs = require('fs');

// Reading the modified file :---
    fs.readFile('./nodejs_architecture.txt' , 'utf-8', (err , data)=>{
        if (err) {
            console.log(`Error reading the file > ${err}`);
            return
        }
        console.log(`Modified file Content > ${data}`);
    } );
