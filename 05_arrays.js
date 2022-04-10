const miArray = ["Hola", 5, true, null, undefined, {a: 2, b: 3}, () => "Adios", [1, 2, 3]];
console.log(miArray);

miArray[4] = "Pablo";
console.log(miArray[4]);

const numeros = [1, 2, 3, 4, 5, 6];
numeros.push(7);  // agregamos 7 al final del array

const ultimoElemento = numeros.pop();  // eliminamos y obtenemos el ultimo elemento
console.log(ultimoElemento);  // 7

numeros.unshift(0);  // agregamos 0 como primer elemento
const primerElemento = numeros.shift();  // eliminamos y obtenemos el primer elemento
console.log(primerElemento);

// Agregar elemento en una determinada posicion
numeros.splice(3, 0, "cuatro", "cinco");  // splice(posicion, cantidad de elementos a eliminar, valores...)
console.log(numeros);  // [ 1, 2, 3, 'cuatro', 'cinco', 4, 5, 6 ]

// Recorrer ARRAY
// forEach realiza una accion pero no devuelve nada
numeros.forEach((elemento, indice) => {
  console.log(`${indice}: ${elemento}`);
});

// map devuelve un nuevo array
let misNumeros = [1, 2, 3, 4];

misNumerosAlCuadrado = misNumeros.map(numero => numero ** 2);
console.log(misNumerosAlCuadrado);

// EJEMPLOS
const facturas = [
  {
    precio: 23,
    cantidad: 1
  },
  {
    precio: 19,
    cantidad: 2
  },
  {
    precio: 14,
    cantidad: 4
  },
  {
    precio: 22,
    cantidad: 1
  }
];

const IVA = 1.21;

const sumaPorCadaFactura = facturas.map(factura => factura.precio * factura.cantidad * IVA);
console.log(sumaPorCadaFactura);

const facturasMayoresQueTreinta = sumaPorCadaFactura.filter(i => i > 30);
console.log("Mayores que 30:", facturasMayoresQueTreinta);

const sumaTotalDeFacturas = sumaPorCadaFactura.reduce((a, b) => a + b);
console.log("Suma total:", sumaTotalDeFacturas);
