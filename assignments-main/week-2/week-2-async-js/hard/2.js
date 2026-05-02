/*
SLEEP COMPLETELY
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(ms) {
    return new Promise((resolve) => {
        const start = Date.now();

        while (Date.now() - start < ms) {
            // busy wait (blocks thread), nothing happens during this period
        }

        resolve();
    });
}

sleep(3000).then(()=>{
    console.log("people are watching but we don't care");
})

console.log("start") // this does not run immediately because sleep() blocks the thread for that period of time


module.exports = sleep;


/* setTimeout causes no blocking meaning the rest task are completed accordingly while this runs in the background but
this Sleep function completely freezes the system and it won't do nothing in that period of time
*/
