let arr = [10,20, 30,40,50];

function getSum(arr){
let sum=0;
// for(let i =0;i<arr.length;i++){
//     sum= sum+arr[i];
// }

arr.forEach((value)=>{
    sum= sum+value;
})
return sum;
}

let totalSum = getSum(arr);
console.log(totalSum);