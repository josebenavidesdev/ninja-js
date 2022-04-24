const header = document.getElementById("header")  // si no lo encuentra devuelve null
const linksPorClase = document.getElementsByClassName("menu-link")  // HTMLCollection(3)
const linksPorTag = document.getElementsByTagName("a")  // HTMLCollection(3)

console.log("Cantidad de links:", linksPorClase.length)

// querySelector devuelve solo un elemento
const menu = document.querySelector("#menu")

// querySelectorAll devuelve varios elementos
// las NodeList son estaticas a diferencia de HTMLCollection, es decir
// se quedaran grabadas una vez capturadas
const links = document.querySelectorAll(".menu-link")  // NodeList(3)

// hijo del header
console.log(header.children)  // HTMLCollection [h1.header-title]
console.log(header.parentElement)  // <div class="container">...</div>

// conversion de listas a arrays
const linksArray = [...linksPorClase];

links.forEach(link => console.log(link))
