// function changeText()
// {
//     let fpara=document.getElementById('fpara');
//     fpara.textContent="shrushti jee ";
// }
// let fpara =document.getElementById('fpara');
// fpara.addEventListener('click',changeText)
// fpara.removeEventListener("click",changeText);//remove


// how to change anchor tag behaviour 
// let anchor=document.getElementById('fanchor');
// anchor.addEventListener("click",function(event){
// event.preventDefault(); // using this i want to change default behaviour of achor tag
// anchor.textContent="Clin on me re";
// })

function alertPara(event)
{
    alert("mujhse nhi dekha jayega : " + event.target.textContent);
}
let mydiv=document.getElementById("fdiv");
document.addEventListener("click",alertPara);
