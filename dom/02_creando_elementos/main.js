const titulo2 = document.createElement("h2")
const textoTitulo2 = document.createTextNode("Título de H2")

const articulo = document.getElementById("article")
// con true clono en profundidad el nodo con todos sus hijos
const copiaDeArticulo = articulo.cloneNode(true)

const seccion = document.getElementById("section")
// seccion.appendChild(copiaDeArticulo)  // se agrega como ultimo hijo
// tambien existe insertBefore()

// otra forma de insertar elementos
seccion.insertAdjacentElement("beforeend", copiaDeArticulo)

// tambien existe: insertAdjacentText y insertAdjacentHTML
// eliminar nodo: seccion.remove()

// selecciono el primer hijo de seccion que es el titulo y lo modifico
seccion.children[0].textContent = "Título de la sección modificada"

// obteniendo y modificando valores de atributos
console.log(seccion.getAttribute("name"))
seccion.setAttribute("name", "nuevoNombreDeSeccion")
console.log(seccion.getAttribute("name"))
console.log(seccion.getAttribute("class"))  // section foo

console.log(seccion.className)  // section foo
console.log(seccion.classList)  // DOMTokenList(2)
console.log(seccion.classList[0])  // section
console.log(seccion.classList[1])  // foo

// agregando clase
seccion.classList.add("bar")
console.log(seccion.classList[2])  // bar

// agregar y quitar clase
seccion.classList.toggle("claseToggle")

const nuevoArticulo = document.createElement("article")
nuevoArticulo.id = "article"
nuevoArticulo.className = "article bgBlue"
nuevoArticulo.innerHTML = `
<h3 class="article-title">Título del articulo</h3>
  <p class="article-content">
    Lorem ipsum, dolor sit amet consectetur, adipisicing elit. Ullam quos reprehenderit aliquid,
    quae, autem mollitia eos a quidem esse amet facilis laudantium eaque, inventore, doloribus
    magnam ut aliquam officiis ducimus? Aliquam perferendis aspernatur quibusdam nihil, odit
    eum aperiam illum distinctio iste. Reiciendis iusto eveniet fuga dicta, aliquid ipsum nihil
    tempore sapiente asperiores amet, aspernatur rerum ullam iure debitis quas eos cumque pariatur!
    Eos, iste illum numquam quae quisquam reiciendis aliquam doloribus voluptatum. Corrupti alias
    doloribus numquam nostrum, soluta quia minus quidem rerum cumque unde. Libero aliquid perspiciatis
    asperiores labore laudantium rerum in, excepturi reprehenderit, ad magni quis fugit est alias.
  </p>
`;
seccion.appendChild(nuevoArticulo)