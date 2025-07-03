// classes
// its a bluePrint of a object  
//class state / propertity
// brhaviour and functionalilty
//  class human{

// // properties
//     age=12;//public
//     #wt=42; //private
//     ht=180;

//  constructor(newAge,newHeight,newWeight)
//  {
//     this.age=newAge;
//     this.ht=newHeight;
//     this.#wt= newWeight;
//  }



//     // behaviour
//     walking(){
//         console.log("I am walking",this.#wt);
        
//     }
//     running(){
//         console.log("I am running");
        
//     }
//     get fetchWeight(){
//         return this.#wt;
//     }
//     set modifyHeigt(val){
//         this.#wt=val;
//     }
//  }
//  let obj= new human(50,190,120);
//  console.log(obj.fetchWeight);
//  obj.walking();
 



// default parameter
// function

function getAge(){
    return 24;
}
function utility(name="shrunal",age=getAge()){
    console.log(name,' ',age);
    
}
utility();







// //objects
// function solve(value={age:21,wt:42,ht:5.2}){
//     console.log("Hello shrushti ->",value);
    
// }
// solve(undefined) // default value store hoga
// solve(null);//value number null store






// function sayname(myname , lname=myname.toUpperCase()){
//     console.log("My name is : ", myname ," ",lname);
    
// }
// sayname("Shrushti")