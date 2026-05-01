const fs = require ('fs'); // used when 

console.log("Start");

// function to read file asynchronously
fs.readFile('a.txt', 'utf8', (err, data) => { // this whole code is asynchronous so it goes in the background reading the content while the further code executes 
    if(err){
        console.log("Error:", err);
        return;
    }
    console.log("Content:", data);
});


// expensive operation
let sum = 0;
for(let i =0; i<10000; i++){
    sum+=i;
}
console.log(sum);

console.log("End");