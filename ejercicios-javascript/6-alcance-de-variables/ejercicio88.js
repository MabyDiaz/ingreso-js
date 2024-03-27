/* 88. Escribe una función llamada `calcularFactorial` que tome un número entero como
argumento y calcule su factorial (por ejemplo, `5! = 5 * 4 * 3 * 2 * 1`). Muestra el resultado
en la consola. */

function calcularFactorial(numero) {
  let factorial = 1;
  let multiplicaciones = "";

  for (let i = numero; i > 1; i--) {
    factorial *= i;
    multiplicaciones += i;

    if (i !== 1) {
      multiplicaciones += " * ";
    }
  }

  return {
    multiplicaciones: multiplicaciones,
    factorial: factorial,
  };
}

let numero = 8;
let resultado = calcularFactorial(numero);
console.log(`${numero}! = ${resultado.multiplicaciones} = ${resultado.factorial}`);
