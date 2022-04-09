// TIPOS DE DATOS PRIMITIVOS
const TASA_IGV = 1.18;

let precio = 25;
precio = precio * TASA_IGV;  // cambiamos el valor de la variable

const cantidad = 2;

const total = precio * cantidad;

console.log(total);

let edad = 21;  // no existe tipo entero ni decimal sino solo tipo Number
// sumamos un año
edad += 1;  // edad = edad + 1, edad++
console.log(`Mi nombre es Pablo y tengo ${edad} años`); // strings y template strings

// division
console.log(5 / 2);  // 2.5

// resto de division entera (operador modulo)
console.log(5 % 2);  // 1

let nulo = null;  // el valor nulo se indica explicitamente
console.log(nulo);  // null

let indefinido;
console.log(indefinido);  // undefined

// COMPROBAR TIPOS DE DATOS
console.log(typeof "hola");  // string
console.log(typeof true);  // boolean
console.log(typeof 21);  // number

console.log(typeof undefined);  // undefined
console.log(typeof null);  // object
console.log(typeof []);  // object
console.log(typeof {});  // object
console.log(typeof function () {});  // function
