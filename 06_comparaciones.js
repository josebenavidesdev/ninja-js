const a = "1";
const b = 1;

// loose - comparacion de valor
console.log(a == b);  // true
console.log(a == true);  // true
console.log([] == 0);  // true
console.log("a" == true);  // false

// strict - comparacion de tipo y valor
console.log(a === b);  // false
console.log(a === true);  // false
console.log([] !== 0);  // true
console.log("a" === true);  // false

console.log(5 <= 3);  // false
console.log(5 <= 5);  // true

console.log(10 < 20 && 20 > 30);  // false
console.log(10 < 20 || 20 > 30);  // true

console.log(!(true && true));  // false
