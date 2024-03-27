/* 85. Escribe una función llamada `revertirTexto` que tome una cadena de texto como
argumento y devuelva la cadena invertida. */

function revertirTexto(frase) {
  return frase.split("").reverse().join("");
}

console.log(revertirTexto("La vida es el arte de dibujar sin borrar"));
