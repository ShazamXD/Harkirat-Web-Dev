/* 

-- SYNCHRONOUS CODE --

executed line by line, in the order it is written. Each operation waits for the
previous one to complete before moving to the next one

example: function sum(n) {
	    let ans = 0;
	    for (let i = 1; i <= n; i++) {
		ans = ans + i
	    }
	    return ans;
    }
        const ans1 = sum(100);
        console.log(ans1);
        const ans2 = sum(1000);
        console.log(ans2);
        const ans3 = sum(10000);
        console.log(ans3);


-- I/O HEAVY OPERATIONS --

These operations usually require waiting for data to be read from or written to 
sources like disks, networks, databases, or other external devices, which can be 
time-consuming compared to in-memory computations.

example:
        const fs = require("fs"); // when you have to read the data from external file
                                     you use this to import it into js first 

const contents = fs.readFileSync("a.txt", "utf-8"); // after import it works as a
                  object and you can access the keys just like in normal js objects
console.log(contents);

const contents2 = fs.readFileSync("b.txt", "utf-8"); // here b.txt is the path and 
                                                        utf-8 is the encrypt form of data
console.log(contents2);

// this code reads the other file synchronously



-- I/O BOUND TASKS vs CPU BOUND TASKS --

CPU-bound tasks are operations that are limited by the speed and power of the CPU

example:  let ans = 0;
          for(let i=1; i<=10000; i++){
            ans = ans + i;  
            }
            console.log(ans);


I/O-bound tasks are operations that are limited by the system's input/output capabilities

example:  const fs = require("fs");
          const contents = fs.readFileSync("a.txt", "utf-8");
          console.log(contents);
          
          

-- ASYNCHRONOUS CODE --














*/