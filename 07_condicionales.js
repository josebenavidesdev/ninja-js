const numero = 2;

if (numero === 0) {
  console.log("Cero");
} else if (numero === 1) {
  console.log("Uno");
} else {
  console.log("No es cero ni uno");
}

// Valores Falsy
// 0 -0 "" '' `` false null undefined NaN

// cualquier otro valor es Truthy
console.log(Boolean([]))  // true
console.log(Boolean({}))  // true
console.log(Boolean('Hola mundo'))  // true
console.log(Boolean(new Date()))  // true
