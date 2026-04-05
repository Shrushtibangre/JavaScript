const value1 = Symbol('description');
const value2 = Symbol('description');
console.log(value1 === value2); // Output: false


const obj = {
  [value1]: 'Value associated with value1',
  [value2]: 'Value associated with value2'
};
console.log(obj[value1]); // Output: Value associated with value1
console.log(obj[value2]); // Output: Value associated with value2   

