/* 8-Desarrolla una función llamada calcularFactorial que tome un número como parámetro y devuelva su factorial. Utiliza un ciclo for para realizar la multiplicación iterativa. */

function calcularFactorial(numero) {
  let multiplicaciones = "";
  let factorial = 1;
  for (let i = numero; i > 0; i--) {
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

let resultado = calcularFactorial(8);
console.log(resultado.multiplicaciones);
console.log("El factorial es = " + resultado.factorial);
