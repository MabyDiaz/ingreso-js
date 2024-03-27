/* 67- Escribe una función llamada calcularPotencia que tome dos números como
argumento, base y exponente, y retorne el resultado de elevar la base al exponente. */

function calcularPotencia(base, exponente) {
  let potencia = base ** exponente;
  return potencia;
}

let base = Math.floor(Math.random() * 100 + 1);
let exponente = Math.floor(Math.random() * 10 + 1);

console.log(`Base: ${base}`);
console.log(`Exponente: ${exponente}`);
console.log(`Resultado: ${calcularPotencia(base, exponente)}`);
