
// var:- is function scoped and re-declarable in same scope and re-assignable in same scope
var age = 22;

if (age >= 18) {
    console.log("You are an adult.", age);
}
else {
    console.log("You are a minor.", age);
}

function solve(){
    var age = 16;
    
}
console.log("Inside function, age is:", age);
solve();
var age=22;
var age=16;
console.log("Age is:",age);


let age = 22;
age=16;
if (age >= 18) {
    let message = "You are an adult.";
    console.log(message, age);
} else {
    let message = "You are a minor.";
    console.log(message, age);
}

// Let :- block scoped variable and not re-declarable in same scope not re-assignable in same scope
function solve() {
    let age = 16;
    console.log("Inside function, age is:", age);
}
solve();

// const:- block scoped and not re-assignable and not re-declarable in same scope
const age = 12;

if (age >= 18) {
    const message = "You are an adult.";
    console.log(message, age);
} else {
    const message = "You are a minor.";
    console.log(message, age);
}   
function solve() {
    const age = 26;
    console.log("Inside function, age is:", age);
}
solve();