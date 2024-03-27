/* 76. Crea un arreglo de palabras y utiliza un bucle `for` para concatenar todas las palabras
en una sola cadena y mostrarla en la consola. */

let palabras = ["Hola", "mundo", "fantástico", "e", "increible", "!"];
let palabrasConcatenadas = "";
for (let i = 0; i <= palabras.length - 1; i++) {
  palabrasConcatenadas += palabras[i];
  if (i != palabras.length - 1 && i != palabras.length - 1) {
    palabrasConcatenadas += " ";
  }
}

console.log(palabrasConcatenadas);
