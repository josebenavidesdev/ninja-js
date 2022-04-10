const numero = 3;

switch (numero) {
  case 0:
    console.log("Cero");
    break;
  case 1:
    console.log("Uno");
    break;
  case 2:
    console.log("Dos");
    break;
  case 3:
    console.log("Tres");
    break;
  default:
    console.log("Otro");
}

switch (numero) {
  case 0:
  case 1:
  case 2:
    console.log("foo");
    break;
  case 3:
  case 4:
  case 5:
    console.log("bar");
    break;
  default:
    console.log("baz")
}