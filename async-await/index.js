// async function  getData(){
//     setTimeout(function(){
//         console.log("I am inside set timeout block");
        
//     },3000);
// }

// getData();



// async function getData() {

//     // get request -async
//     let response = await fetch('https://jsonplaceholder.typicode.com/comments?postId=1');
//     let data= await response.json();
//     console.log(data);
    
    
// }
// getData();


// relay race 


const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const url ='https://jsonplaceholder.typicode.com/posts';

const options={
 method: "POST",
  body: JSON.stringify({ username: "Shrushti Bangre" }),
  headers: myHeaders,
}
// const response = await fetch(url, options);
async function getData(){
    const url ='https://jsonplaceholder.typicode.com/posts/1';
    const response = await fetch(url);
  let data = await response.json();
  console.log("get data response: " , data);
}
async function postData(){
    const response = await fetch(url ,options);
  let data = await response.json();
  console.log("My data: " , data);
  
}
async function processData(params) {
    await postData();
 await getData();
}
processData();
