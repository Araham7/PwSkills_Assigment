# index.js :---
```index.js
const fs = require('fs');

// deletion of file :---
fs.unlink("nodejs_architecture.txt", (err) => {
    if (err) {
        console.error('Error deleting file:', err);
        return;
    }
    console.log("File Deleted SuccessFully");
});



// Sir/ma'am please run index.js file and delete the "nodejs_architecture.txt" file .

```


# Before_modification(before running the code) :---
<img src="Assigment_5_before_deletion_of_file.png" alt="OUTPUT before running the code" title="Assigment_5_before_modification.png">

# After_modification(after running the code) :---
<img src="./Assigment_5_after_deletion_of_file.png" alt="OUTPUTafter running the code" title="Assigment_5_after_modification.png">
