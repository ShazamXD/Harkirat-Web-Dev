/* Important to know about JS

- it is a dynamically typed language means that the variable type can be changed anytime
example: var a = 1;
         a = "chitransh";
         a = true;
         console.log(a); this will output the last line of code that is 'true'

- it is also a single thread language that means that one task is performed at once by the same thread
example: you are cooking food and you are the only one doing all the tasks like chooping, washing, cooking so the tasks has to wait for the other task to complete first


--VARIABLES--

let firstName = "chitransh"; // can be defined again and value can also be changed. Variable that can be reassigned

const age = 30; // value can't be changed. Can't be reassigned

var isStudent = true; // never use it btw, older way to declare variable, function-scoped



--FUNCTIONS--

function canVote(age){  // here age is whatever the input value that you give to the function it can be (a,b), (name), etc
    if(age>18) return true;
    else return false;
}
    let ans = canVote(19);
    cosole.log(canVote);



--OBJECTS-- 

an object in js is similar to map in c++, it is a collection of key-value pair
where each key is a string and value can be any valid js data type, including another object

function greet(user){ 
    let title;
    if(user.gender == "male") title = "Mr."";
    else if (user.gender == "female") title =  "Mrs.";
    else title = "Others";
    return ("hi "+ title + user.name + "your age is "+ user.age); // string concatenation
}

let user = { // this is how the object is declared 
    name: "Harkirat",
    age: 60,
    gender: male
};

greet(user); // function called


--ARRAY--

let arr = ["chitransh", 21, { 
    name: "chitransh",
    age: 21
    cities: ["delhi", "bangalore", "rishikesh"]    
}]; 
// array can contain objects as their elements too and it can go more nested as the key of object can have values in array too


const val1 = arr[2];

const val2 = {
    name: "chitransh",
    age: 21    
}

comsole.log(val1);
console.log(val2); // both will give the same output 

example: 

function solve(user){
    let ans = [];
    for(int i=0; i<user.length; i++){
        if(user[i].age > 18 && user[i].gender == male){
        ans.push(user[i]);  
        } 
    }
        return ans;    
}

let user = [{
    name: harkirat,
    age: 19,
    gender: male    
}, 
{
    name: chitransh,
    age: 18,
    gender: others    
}
];

console.log(solve(user));


*/