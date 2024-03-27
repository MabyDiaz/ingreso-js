/* 84. Crea una función llamada `calcularPromedio` que acepte un arreglo de números como
argumento y devuelva el promedio de esos números. */

let numeros = [8, 32, 5, 18];

function calcularPromedio(numeros) {
  let suma = 0;
  let promedio = 0;

  for (let i = 0; i <= numeros.length - 1; i++) {
    suma += numeros[i];
  }

  promedio = suma / numeros.length;

  return promedio;
}

let resultado = calcularPromedio(numeros);
console.log(`El promedio es: ${resultado}`);
