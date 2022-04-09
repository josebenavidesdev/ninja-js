// NOTA: las constantes no pueden ser declaradas sin definirle un valor

const cadena = "5";
const numero = 7;
const condicion = true;
const nulo = null;
let indefinido;

console.log(cadena + numero);  // 57
console.log(cadena + condicion);  // 5true
console.log(cadena + nulo);  // 5null
console.log(cadena + indefinido);  // 5undefined

console.log(numero + condicion);  // 8 (true = 1, false = 0)
console.log(numero + nulo);  // 7 (nulo = 0)
console.log(numero + indefinido);  // NaN (no se puede operar)
console.log(numero - cadena);  // 2 (si la cadena se puede convertir a un numero se aplicara la resta)
console.log(numero - "hola");  // NaN
console.log(numero / 0);  // Infinity
console.log(numero / "adios");  // NaN

// Conversion de tipos EXPLICITA
console.log(String(numero));  // 7
console.log(String(condicion));  // true
console.log(String(nulo));  // null
console.log(String(indefinido));  // undefined

console.log(Number("5"));  // 5
console.log(Number(true));  // 1
console.log(Number(false));  // 0
console.log(Number(null));  // 0
console.log(Number(undefined));  // NaN

console.log(Boolean("5"));  // true
console.log(Boolean("0"));  // true
console.log(Boolean(7));  // true
console.log(Boolean(-7));  // true
console.log(Boolean(0));  // false
console.log(Boolean(""));  // false
console.log(Boolean(null));  // false
console.log(Boolean(undefined));  // false

// Parseo de números
console.log(parseInt(5.7));  // 5
console.log(parseInt("21"));  // 21
console.log(parseInt("21.75"));  // 21
console.log(parseInt("hola"));  // NaN
console.log(parseInt(null));  // NaN
console.log(parseInt(undefined));  // NaN

console.log(parseFloat(5.75));  // 5.75
console.log(parseFloat(5));  // 5
console.log(parseFloat(null));  // NaN
console.log(parseFloat(undefined));  // NaN
