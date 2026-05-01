// Inshort we have create a stopwatch 

let count = 0; 

function callback(){
    console.clear();
    console.log(count);
    count++;
}
setInterval(callback, 1000); 

// use setTimeout when you want to print something once after a certain interval of time
// use setInterval when you want something to keep displaying after certain interval of time