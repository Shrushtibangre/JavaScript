// let arr =[1,2,3,4,5,6,7,8,9,10];

// let newArr = new Array('shrushti', 17, 22, 'Pune', true);

// newArr.push('JavaScript');
// console.log(newArr);

// newArr.pop();
// console.log(newArr);

// newArr.unshift('Hello');
// console.log(newArr);

// newArr.shift();
// console.log(newArr);

// newArr.slice(2, 4);
// console.log(newArr.slice(2, 4));

// newArr.splice(0, 0, 'Kunal');
// console.log(newArr);

/* Map method */
// let arr = [1, 2, 3, 4, 5, 6,8, 9, 10];

//  arr.filter((number, index) => {
//     console.log(number+1);
//     console.log(index);
// });

// let newArr = arr.map((number)=> {
//     return number* number;
// })
// console.log(newArr);


// filter 

// let ans = arr.filter((value)=>{
//     if(typeof (value) === 'number'){
//         return true;
//     }
//     else{
//         return false;
//     }
// })

// console.log(ans);


// let filterArr = arr.filter((number) => {
//     return number % 2 === 0;
// });
// console.log(filterArr);


// reduce

//  let ans= arr.reduce((acc, curr)=>{
//     return acc +curr;
// }, 0);

// console.log(ans);


let arr=[4,2,7,1,6,3,5];
//  arr.sort();

// //  descending
// let ans = arr.sort((a,b)=>{
//     return b-a;
// })
//  console.log(ans);

// //  indexof
// console.log(arr.indexOf(5));


// console.log(arr.length);

// forEach

// for(let index=0; index<arr.length;index++){
//     console.log(arr[index]);
// }

// arr.forEach((value, index)=>{
//     console.log("Number:", value, "Index:",index);
// })


// for in
 for(let index in arr){
    console.log("number:", arr[index] );
 }