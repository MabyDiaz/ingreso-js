/* 58. Escribe una función llamada `esPar` que tome un número como argumento y retorne
`true` si es par o `false` si es impar. Luego, muestra el resultado en la consola. */

let numero = Math.floor(Math.random() * 1000 + 1);
console.log(numero);

function esPar(numero) {
  return numero % 2 === 0;
}

console.log(`EL número ${numero} es par?: ${esPar(numero)}`);
console.log(`El número ingresado es ${esPar(numero) ? "par" : "impar"}.`);
