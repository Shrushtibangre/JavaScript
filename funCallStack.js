

function greetMe(greet, name){
    console.log("hello", name);
    greet();
}


function greet(){
    console.log("Have a nice day");
}
greetMe(greet, "Pochu");