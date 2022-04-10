let contador = 0;

while (contador < 5) {
  contador++;

  if (contador === 3) continue;  // me salto el 3

  console.log("While:", contador);
}

do {
  console.log("Se ejecutara al menos una vez!");
} while (false);
