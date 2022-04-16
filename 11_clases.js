class Curso {
  static BASE_URL = "desarrolloutil.com/cursos/";

  constructor(titulo, dificultad) {
    this.titulo = titulo;
    this._dificultad = dificultad;
    this.lecciones = [];
  }

  static bienvenida() {
    console.log("Bienvenido al Curso!");
  }

  get dificultad() {
    console.log("Obtengo la dificultad");
    return this._dificultad;
  }

  set dificultad(nuevaDificultad) {
    if (nuevaDificultad >= 0 && nuevaDificultad <= 5) {
      this._dificultad = nuevaDificultad;
    } else {
      console.log("No hago nada!");
    }
  }

  agregarLeccion(leccion) {
    this.lecciones.push(leccion);
  }

  eliminarUltimaLeccion(leccion) {
    this.lecciones.pop();
  }
}

const cursoJs = new Curso("Javascript", 1);
const cursoTs = new Curso("Typescript", 3);

cursoJs.agregarLeccion("Intro a Js");
cursoJs.agregarLeccion("Variables");
cursoJs.agregarLeccion("Tipos de datos");


console.log(cursoJs.dificultad);
cursoJs.dificultad = 7;

console.log("Base Url:", Curso.BASE_URL);
Curso.bienvenida();
