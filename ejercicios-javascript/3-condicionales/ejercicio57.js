/* 57. Define una variable `numero` y verifica si es positivo, negativo o igual a cero utilizando
una declaración `if` y muestra el resultado en la consola. */

let numero = Math.floor(Math.random() * 10 + 1);

if (numero === 0) {
  console.log("El número es cero.");
} else if (numero > 0) {
  console.log("El número es positivo");
} else {
  console.log("El número es negativo");
}
