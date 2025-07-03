// code1

const t1=performance.now()
 for(let i=0;i<100;i++)
 {
    let para=document.createElement('p');
    para.textContent="this is shrushti para"+i;
    document.body.appendChild(para);
 }
// how much time giving standred way to run javascipt code
const t2=performance.now()
console.log("total time taking is  code1 :"+(t2-t1));



// code2
const t3=performance.now()
let mydiv=document.createElement('div');
for(let i=0;i<=100;i++){
    let para=document.createElement('p');
    para.textContent="This is para number: "+i;
    mydiv.appendChild(para);
}
document.body.appendChild(mydiv);

const t4=performance.now()
console.log("total time taking is code2 :"+(t4-t3));




// best code 
// document fragment

/*light weight doc object
addition or append bolo to reflow and repaint nhi hoga
*/
const t5=performance.now()


let fragment =document.createDocumentFragment();

for(let i=1;i<=100;i++){
    let para=document.createElement('p');
    para.textContent="this is para " +i;
    // no reflow and no repaint for the below line
    fragment.appendChild(para);
}
document.body.appendChild(fragment);
const t6=performance.now()
console.log("total time taking is code :"+(t6-t5));