// NOTA: este tipo de funcion puede declararse despues de ser llamada
function saludar(nombre, apellido) {
  return `Hola ${nombre} ${apellido}, Bienvenido a Desarrollo Útil`;

  console.log("Esto no se ejecuta");
}

saludar("Pablo", "Castellanos");  // Hola Pablo Castellanos, Bienvenido a Desarrollo Útil
saludar("Josemi");  // Hola Josemi undefined, Bienvenido a Desarrollo Útil
saludar("Pablo", "Castellanos", "asd", 123);  // Hola Pablo Castellanos, Bienvenido a Desarrollo Útil

const resultado = saludar("Miguel", "Santos");
console.log(resultado);  // Hola Miguel Santos, Bienvenido a Desarrollo Útil


// NOTA: este tipo de funcion (anónima) NO puede declararse despues de ser llamada
// porque se aplica la regla de las constantes
const saludar2 = function (nombre) {
  return `Hola ${nombre}, Bienvenido a Desarrollo Útil`;
}

const resultado2 = saludar2("Uriel");
console.log(resultado2);  // Hola Uriel, Bienvenido a Desarrollo Útil


// CALLBACKS, funcion pasada como parametro
const obtenerSaludo = function (nombre) {
  return `Hola ${nombre}, estamos programando!`;
}

const imprimirSaludo = function (mensaje) {
  console.log(mensaje);
}

const saludar3 = function (obtener, imprimir) {
  const saludo = obtener("Luis");
  imprimir(saludo);
}

saludar3(obtenerSaludo, imprimirSaludo);  // Hola Luis, estamos programando!


// ARROW FUNCTIONS
const sumar = (a, b) => a + b;

console.log(sumar(10, 15));  // 25

const multiplarPorDos = numero => numero * 2;

console.log(multiplarPorDos(10));  // 20
