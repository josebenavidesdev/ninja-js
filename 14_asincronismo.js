function tarea(nombreTarea, siguiente, error) {
  console.log(nombreTarea);

  if (Math.random() < 0.2) console.log(error);

  else setTimeout(siguiente, 1000);
}

function pensarIdea() {  // callback hell
  tarea("Pensar idea", function () {
    tarea("Guionizar", function () {
      tarea("Grabar", function () {
        tarea("Editar", function () {
          tarea("Publicar", function () {
            console.log("Video publicado :)");
          }, "Error al publicar!");
        }, "Error al editar!");
      }, "Error al grabar!");
    }, "Error al guionizar!");
  }, "Error al pensar idea!");
}

pensarIdea();
