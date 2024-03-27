/* 9-Escribe una función llamada imprimirPares que tome un número como parámetro e imprima todos los números pares desde 1 hasta ese número utilizando un ciclo for. */

function imprimirPares(numero) {
  let pares = " ";
  for (let i = 2; i <= numero; i++) {
    if (i % 2 === 0) {
      pares += i;
      if (i !== numero) {
        pares += " ";
      }
    }
  }
  return pares;
}

console.log("Pares: " + imprimirPares(20));
