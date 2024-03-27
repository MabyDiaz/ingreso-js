/* 80. Define un arreglo de números y utiliza un bucle `for` para encontrar el número más
grande en el arreglo y mostrarlo en la consola. */

let numeros = [8, 45, 3, 25, 10, 32];
let numeroMaximo = [0];

for (let i = 0; i <= numeros.length - 1; i++) {
  if (numeros[i] > numeroMaximo) {
    numeroMaximo = numeros[i];
  }
}

console.log(`El número más grande del arreglo de números es ${numeroMaximo}`);
