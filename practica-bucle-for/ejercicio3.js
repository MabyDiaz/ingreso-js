/* 3-Implementa una función llamada duplicarCaracteres que tome una cadena de texto como parámetro y devuelva una nueva cadena donde cada carácter se duplique. Utiliza un ciclo for para iterar sobre la cadena original. */

function duplicarCaracteres(cadenaTexto) {
  let cadenaDuplicada = "";
  for (let i = 0; i <= cadenaTexto.length - 1; i++) {
    cadenaDuplicada += cadenaTexto[i] + cadenaTexto[i];
  }
  return cadenaDuplicada;
}

console.log(duplicarCaracteres("Hola"));
