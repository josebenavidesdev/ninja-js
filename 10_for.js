console.log(typeof []);  // object

const cursosJs = [
  "Intro a Js",
  "Variables y tipos",
  "Conversion de tipos",
  "Funciones"
];

console.log("\nForma Ascendente");
for (let i = 0; i < cursosJs.length; i++) {
  console.log(`${i + 1}. ${cursosJs[i]}`);
}

console.log("\nForma Descendente");
for (let i = cursosJs.length - 1; i >= 0; i--) {
  console.log(`${i + 1}. ${cursosJs[i]}`); 
}

console.log("\nfor .. of");
for (const leccion of cursosJs) {
  console.log(leccion);
}

console.log("\nfor .. in");
// For .. in, sirve para iterar sobre las claves de un objeto
const curso = {
  title: "CursoJs",
  profesor: "Pablo"
}

for (const i in curso) {
  console.log(`${i}: ${curso[i]}`);
}
