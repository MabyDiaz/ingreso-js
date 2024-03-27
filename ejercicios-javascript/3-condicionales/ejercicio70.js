/* 70- Escribe una función llamada calcularFibonacci que tome un número entero positivo
como argumento y retorne el n-ésimo término de la secuencia de Fibonacci. La secuencia
de Fibonacci comienza con 0 y 1, y cada término subsiguiente es la suma de los dos
términos anteriores. */

function calcularFibonacci(n) {
  if (n <= 0) {
    return "El número debe ser positivo y mayor que cero";
  } else if (n === 1) {
    return 0;
  } else if (n === 2) {
    return 1;
  } else {
    let fibPrevio = 0;
    let fibActual = 1;
    let resultado = 0;

    for (let i = 2; i <= n; i++) {
      resultado = fibPrevio + fibActual;
      fibPrevio = fibActual;
      fibActual = resultado;
    }

    return resultado;
  }
}

console.log(calcularFibonacci(3));
