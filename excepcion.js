const NUMERO_PIEZAS = 10;
const PROBABILIDAD_ERROR = 0.25;
let correctas = 0;
let defectuosas = 0;

const comprobarSiEsDefectuosa = () => Math.random() < PROBABILIDAD_ERROR;

class ErrorPiezaDefectuosa extends Error {}

class ErrorCadenaParada extends Error {}

for (let i = 1; i <= NUMERO_PIEZAS; i++) {
  const esDefectuosa = comprobarSiEsDefectuosa();

  try {
    if (i === 7) throw new ErrorCadenaParada(`Se detuvo la produccion!`);

    if (esDefectuosa) throw new ErrorPiezaDefectuosa(`Pieza ${i} defectuosa`);

    console.log(`Pieza ${i} fabricada`);

    correctas++;
  } catch (ex) {
    if (ex instanceof ErrorCadenaParada) {
      console.error(ex.message);
      throw ex;  // detenemos la ejecucion del codigo llamando a la propia excepcion
    }

    if (ex instanceof ErrorPiezaDefectuosa) console.error(ex.message);

    defectuosas++;
  } finally {
    // esto siempre se ejecutara
  }
}

console.log(`Fabricadas: ${NUMERO_PIEZAS}`);
console.log(`-> Correctas: ${correctas}`);
console.log(`-> Defectuosas: ${defectuosas}`);
