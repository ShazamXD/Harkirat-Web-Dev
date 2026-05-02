/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve();
            // reject("Error");
        }, n*1000);
    })
}

wait(5).then(()=>{
    console.log("people are watching but we don't care");
})
// .catch((err)=>{
//     console.log("Caught", err);
// })

console.log("start") // this runs immediately because wait() keeps running in the background

module.exports = wait;
