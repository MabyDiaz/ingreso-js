/* 2-Crea una función llamada contarCaracteres que tome una cadena de texto y un carácter como parámetros, y devuelva la cantidad de veces que el carácter aparece en la cadena. Utiliza un ciclo for para recorrer la cadena. */

function contarCaracteres(cadenaTexto, caracter) {
     cadenaTexto = cadenaTexto.toLowerCase();
  let cantidadCaracter = 0;
  for (let i = 0; i <= cadenaTexto.length - 1; i++) {
    if (cadenaTexto[i] === caracter) {
      cantidadCaracter++;
    }
  }
  return cantidadCaracter;
}

console.log(contarCaracteres("Mi mama me mima", "m"));
