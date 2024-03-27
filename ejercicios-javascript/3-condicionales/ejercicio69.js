/* 69- Crea una función llamada ordenarArray que tome un arreglo de números como
argumento y retorne un nuevo arreglo con los números ordenados de manera
ascendente. */

let arregloDeNumeros = [8, 5, 15, 32, 3];

function ordenarArray(arregloDeNumeros) {
  arregloOrdenado = arregloDeNumeros.sort((a, b) => a - b);
  return arregloOrdenado;
}

console.log(`Arreglo de números ordenados: ${ordenarArray(arregloDeNumeros)}`);
