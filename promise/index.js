// let firstPromise = new Promise((resolve, reject) => {
//   // console.log("shrushti");
//   // // resolve(1001);
//   // reject(new Error("internal shrushti problem"));

//   setTimeout(function sayMyName() {
//     console.log("My Name is Shrushti Bangre");
//   }, 1000);
// });

// function sayMyName(){
//     console.log("My Name is Shrushti Bangre");
// }
// setTimeout(sayMyName,5000);

// setTimeout(function sayMyName() {
//   console.log("My Name is Shrushti Bangre");
// }, 1000);

// let promise1 = new Promise((resolve, reject) => {
//   let success = true;
//   if (success) {
//     // resolve("Promise Fulfilled");
//     resolve(10);
//   } else {
//     // reject("Promise Rejected");
//     reject(-1);
//   }
// });

// promise1
//   .then((message) => {
//     console.log("first Message is " + message);
//     return 20; //(" 2 message");
//   })
//   .then((message) => {
//     console.log("second message" + message);
//     return 30; //(" 3 message");
//   })
//   .then((message) => {
//     console.log("third message" + message);
//   })
//   .catch((error) => {
//     console.error(error);
//   })
//   .finally((message) => {
//     console.log("mujhe toh chalna hi hoga mere pass option hi nhi hai");
//   });

// promise1.then((message)=>{
//     console.log("Then ka Message is "+ message);
// }).catch((error)=>{
//     console.log("Error: "+error);

// })

let promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "first");
});
let promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "second");
});
let promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "third");
});
let promise4 = new Promise((resolve, reject) => {
  setTimeout(reject, 4000, "four");
});

Promise.all([promise1,promise2,promise3,promise4])
.then((values)=>{
    console.log(values);
    
}).catch((error)=>{
    console.error(error);
    
})