//IT BLOCK OF CODE FIRSTLY CREATE AND JUST ONLY CALL THE FUNCTION 
// FUNCTIOn 


// //definition
// function myName(){
//     console.log("Love Babber");

// }


// //fun call 
// myName();

//  function printCount() {
//     for(let i=0;i<=10;i++)
//     {
//         console.log(i);
//     }
//  }
//  printCount();

// function getAve(n1,n2){
//     let avg=(n1+n2)/2;
//     console.log("Average: ",avg);
    
// }
// getAve(3,70);


//return function
//  function getSum(a,b,c)
//  {
//     let sum= a+b+c;
//     return sum;
//  }
//  let ans = getSum(1,2,3);
//  console.log("Printing sum :" ,ans)


// function getName(firstName,Lastname){
//     let fullname= firstName+ " "+Lastname;
//     return fullname;
// }
// let full= getName("shrushti","Bangre");
// console.log(full);



// function getMul(a,b){
//     return a*b;
// }
// console.log(getMul(2,4));


// let solve =function(a,b){
//     return a*b;

// }
// let ans = solve(20,2);
// console.log(ans);

// let arr =[10,20,30];
// let length= arr.length;
// console.log("length:",length);

// for(let index=0;index<length;index++) 
// {
//     console.log(arr[index]);
    
// }
// arr.forEach((value,index)=>{       //forEach
//     console.log("Number:",value,"Index: ",index);
    
// })




// let obj={
//         name:"Shrushti",
//         age:21,
//         weigth:85,
//         height: "5.2 inch",
//         greet : function()
//         {
//          console.log("Hello shrushti calling");
         
//         }
//     };
// for(let key in obj){ //for in 
//     console.log(key);
    
// }


// let arr =[10,20,50,60];
// for(let value of arr){
//     console.log(value);
    
// }

// let fullname="Sanvi";
// for(let val of fullname){
//     console.log(val);
    
// }


let arr=[10,30,40,60,80];
function getSum(arr){
    // let len =arr.length;
    let sum=0;
    // for(let index=0;index<len;index++)
    // {
    //     sum=sum+arr[index];
    // }
    arr.forEach((value) => {
        sum=sum+value;
    });
    return sum;
}
let totalSum=getSum(arr);
console.log(totalSum);

