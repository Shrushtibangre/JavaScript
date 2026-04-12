// hosting is a simple static file server for development purposes. 
// It serves files from the current directory and listens on port 8080.
// hostin is possible in var and function declaration, but not in let, const and function expression.
// function hosting is used to demonstrate the concept of hoisting in JavaScript.



// function declaration is hoisted to the top of the scope, so it can be called before it is defined.
sayName("Shrushti");

function sayName(finalName){
  console.log(finalName);
}

// function expression is not hoisted, so if we try to call it before it is defined, it will throw a ReferenceError.  
 

 let sayHello=function(){
    console.log("Hello , I'm a function expression");
 }
sayHello();


// variable declaration is also hoisted, but not the assignment. So if we try to access a variable before it is assigned a value, it will be undefined.
  
// only possible in var, not in let and const
  console.log(age);
   var age =22;

//   let and const are not hoisted, so if we try to access them before they are declared, it will throw a ReferenceError.
   
//    let nameS = "Poushchu";
      const nameS = "Poushchu";
       console.log(nameS);




//class declaration is hoisted, but not the class expression. So if we try to create an instance of a class before it is defined, it will throw a ReferenceError.
// class means a blueprint for creating objects with specific properties and methods.

class Human{

}
const human1 = new Human();