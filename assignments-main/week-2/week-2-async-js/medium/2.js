function clock(){
    const now = new Date(); // gives the current time of the system 
    console.log(now);

    // extracting data
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // adding zeroes before the number
    hours = hours.toString().padStart(2,"0"); // padStart ensures that the string has atleast 2 characters, if not adds zero at the start
    minutes = minutes.toString().padStart(2,"0");
    seconds = seconds.toString().padStart(2,"0");

    // 24 hour format
    const time24 = `${hours}:${minutes}:${seconds}`;

    // 12 hour format 
    let period = hours >=12 ? "PM" : "AM";
    let hours12 = hours % 12 || 12; // here "||" converts 0 → 12, it means if left side is falsy use right side 
    hours12 = hours12.toString().padStart(2, "0");

    const time12 = `${hours12}:${minutes}:${seconds} ${period}`;

    console.clear();
    console.log("24-hour:", time24);
    console.log("12-hour:", time12);

}

setInterval(clock, 1000);