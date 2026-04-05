let shrushti={
    name : "krishna",
    age: 22,
    height: 5.2,
    weight:48,
    details : function()
    {
        console.log("greeting from details function");
    }

};

console.log(shrushti);
shrushti.details(shrushti);

// let obj={
//     name:"Shrushti",
//     age:21,
//     weigth:85,
//     height: "5.2 inch",
//     greet : function()
//     {
//      console.log("Hello shrushti calling");
     
//     }
// };
// console.log(obj);
// obj.greet();
// console.log(typeof(obj));

// A shallow copy copies an object's top-level structure, 
// while a deep copy copies the entire object, including nested objects.


 //shallow copy stores the references of objects to the original memory address.
// deep copy stores copies of the objects value.


// let arr=[1,2,3,4,5];
// let brr= new Array('shrushti',1,true);
// console.log(brr);
//  console.log(typeof(arr));
 
// push    for add from last 
// pop     fir remove from last
// shift   remove first item
// unshift add first in item
// slice    array me se stating and ending index se item nikalna hai to jo last index hai usko exculzted 
// splice   content changes  and index ke according 

// map  
// let arr =[10,20,30];
// let ansArray = arr.map((number)=>{
//     return number*number;
// })
// console.log(ansArray);

//filter
// let arr=[2,3,1,4,10,20,40,22,11,32]
// let ans= arr.filter((Number)=>{
// if(Number%2===0)
// {
//     return true;
// }
// else{
//     return false;
// }
// });
// console.log(ans);



//redues

// let arr=[10,20,30,40];
// let ans=arr.reduce((acc,curr)=>{
//     return acc+curr;
// },0)
// console.log(ans);



//sort

// let arr =[1,8,5,4,9,2,4,3];
// arr.sort((a, b) => b - a);
// console.log(arr);


// let arr1 =[1,8,5,4,9,2,4,3];
// arr1.sort((a, b) => b - a);
// console.log(arr1);


// const numbers = [5,18, 10, 4];

// const found = numbers.find((num) => num > 10);

// console.log(found);

