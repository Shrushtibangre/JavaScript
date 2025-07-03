// closure is the combinatin of function and requed data or lexical scope or surrounding state

//nested function =function ke andr function

// function init() {
//   let name = " shrushti";

//   function displayname() {
//     console.log(name);
//   }
//   displayname();
// }
// init();

function init() {
  let name = " shrushti";

  function displayname() {
    console.log(name);
  }
  return  displayname;
}
let inner=init();
inner();
