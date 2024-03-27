/* 79. Escribe una función que imprima la tabla de multiplicar de un número específico
utilizando un bucle `for`. */

function calcularTabla(numero) {
  let resultado = 0;
  for (let i = 1; i <= 10; i++) {
    resultado = i * numero;
    console.log(`${numero} * ${i} = ${resultado}`);
  }
}

calcularTabla(9);
