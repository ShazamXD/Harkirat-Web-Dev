const fs = require('fs');

// reading the file
fs.readFile('a.txt', 'utf8', (err, data)=>{
    if(err){
        console.log("Error:", err);
        return;
    }

    // remove extra spaces 
    const cleaned = data.replace(/\s+/g, " ").trim(); // trim for removing extra spaces at start and end 


    // write back to the same file 
    fs.writeFile('a.txt', cleaned, (err)=>{
        if(err){
            console.log("Error:", err);
            return;
        }
        console.log("File cleaned successfully");
    })

})


