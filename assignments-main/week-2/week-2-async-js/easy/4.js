const fs = require('fs');

console.log("Start");

fs.writeFile('a.txt', "Fuck me until the midnight", (err) => {
    if(err){
        console.log("Error:", err);
    }
    console.log("File written successfully")
})

let sum = 0;
for(let i=0; i<1000000000; i++){
    sum += i;
}
console.log(sum);

console.log("End");


/* writeFile completely erases whatever written before it in the file and writes new content
in order to not delete the existing text use fs.appendFile this file add the text to the 
previously existing text
*/
