class Usuario {
  constructor(nombre, email, password) {
    this.nombre = nombre;
    this.email = email;
    this.password = password;
  }

  bienvenida() {
    console.log(`Hola soy ${this.nombre}`);
  }

  login(email, password) {
    return this.email == email && this.password === password;
  }
}

// solo se puede extender de una clase
class Alumno extends Usuario {
  constructor(nombre, email, password) {
    super(nombre, email, password);  // llamando al constructor de Usuario
    this.cursos = [];
  }

  agregarCurso(curso) {
    this.cursos.push(curso);
  }
}

const pablo = new Usuario("Pablo", "pablo@email.com", "123456");
const jose = new Alumno("Jose", "jose@email.com", "654321");

console.log(pablo);

jose.agregarCurso("HTML");
jose.agregarCurso("Css");
jose.agregarCurso("Javascript");

console.log(jose);

// verirficar instancias
console.log(jose instanceof Object);  // true
console.log(jose instanceof Usuario);  // true
console.log(jose instanceof Alumno);  // true
console.log(jose instanceof String);  // false
