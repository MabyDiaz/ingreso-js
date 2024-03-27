/* 63- Crea una función llamada calcularFactorial que tome un número entero positivo como
argumento y retorne su factorial. El factorial de un número es el producto de todos los
números enteros positivos desde 1 hasta ese número. */

let numero = parseInt(prompt("Ingrese un número entero positivo"));
function calcularFactorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  }

  let factorial = 1;

  for (let i = 2; i <= numero; i++) {
    factorial *= i;
  }

  return factorial;
}
alert(`El factorial de ${numero} es ` + calcularFactorial(numero));

// Otra forma
// function calcularFactorial(numero) {
//   let factorial = 1;
//   for (let i = 1; i <= numero; i++) {
//     factorial *= i;
//   }
//   return factorial;
// }
// console.log(calcularFactorial(5));
