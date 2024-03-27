/* 7-Implementa una función llamada reemplazarVocales que tome una cadena de texto como parámetro y devuelva una nueva cadena donde todas las vocales se reemplacen por un guion bajo (_). Utiliza un ciclo for para iterar sobre la cadena original. */

function reemplazarVocales(cadenaTexto) {
  let cadenaModificada = "";
  let vocales = ["a", "e", "i", "o", "u"];
  for (i = 0; i <= cadenaTexto.length - 1; i++) {
    if (vocales.includes(cadenaTexto[i])) {
      cadenaModificada += "_";
    } else {
      cadenaModificada += cadenaTexto[i];
    }
  }
  return cadenaModificada;
}

console.log(reemplazarVocales("Mi mama me mima"));

//Otra Forma
function reemplazarVocales(cadenaTexto) {
  let cadenaNueva = "";
  for (let caracter of cadenaTexto) {
    if (
      caracter === "a" ||
      caracter === "e" ||
      caracter === "i" ||
      caracter === "o" ||
      caracter === "u"
    ) {
      cadenaNueva += "_";
    } else {
      cadenaNueva += caracter;
    }
  }
  return cadenaNueva;
}

console.log(reemplazarVocales("Mimama me mima"));
