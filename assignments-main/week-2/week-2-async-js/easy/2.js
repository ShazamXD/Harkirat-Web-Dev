

let count = 0;
function callback(){
    //console.clear(); // so that it appears like a actual stopwatch displaying only one number
    console.log(count);
    count++;
    setTimeout(callback, 1000); // this keeps calling the function recursively
}
setTimeout(callback, 1000);