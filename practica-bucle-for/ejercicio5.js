/* 5-Escribe una función llamada calcularPotencia que tome dos números como parámetros, la base y el exponente, y devuelva el resultado de elevar la base al exponente. Utiliza un ciclo for para realizar la multiplicación. */

function calcularPotencia(base, exponente) {
  let potencia = 1;
  for (let i = 0; i < exponente; i++) {
    potencia *= base;
  }
  return potencia;
}

console.log(calcularPotencia(2, 3));
