function clickTitulo(evento) {
  console.log(evento)
}

const tituloFormulario = document.getElementById("form-title")

tituloFormulario.addEventListener("click", clickTitulo)

// DOMContentLoaded: solo la carga del HTML
// NO las imagenes, los videos, otros
document.addEventListener("DOMContentLoaded", function () {
  console.log("El documento se ha cargado")
})

const formulario = document.getElementById("form")

function enviarFormulario(evento) {
  evento.preventDefault()

  // destructuring
  const {nombre, correo, password} = evento.target

  if (nombre.value.length === 0) {
    console.error("Complete el campo nombre")
  } else if (correo.value.length === 0) {
    console.error("Complete el campo correo")
  } else if (password.value.length === 0) {
    console.error("Complete el campo password")
  } else {
    console.log(nombre.value, correo.value, password.value)
  }
}

formulario.addEventListener("submit", enviarFormulario)
