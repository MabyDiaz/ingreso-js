/* 45. Define una variable llamada `numero1` y otra llamada `numero2`. Realiza una
operación aritmética (suma, resta, multiplicación o división) con estas variables y muestra
el resultado en la consola. */

let numero1 = 10;
let numero2 = 20;

let suma = numero1 + numero2;
console.log("La suma es: ", suma);

let resta = null;
if (numero1 > numero2) {
  resta = numero1 - numero2;
  console.log("La resta es: ", resta);
} else if (numero2 > numero1) {
  resta = numero2 - numero1;
  console.log("La resta es: ", resta);
} else {
  resta = numero1 - numero2;
  console.log("Los números son iguales y por lo tanto la resta es: ", resta);
}

let multiplicacion = numero1 * numero2;
console.log("La multiplicación es: ", multiplicacion);

let division = null;
if (numero1 > numero2) {
  division = numero1 / numero2;
  console.log("La división es: ", division);
} else if (numero2 > numero1) {
  division = numero2 / numero1;
  console.log("La división es: ", division);
} else {
  division = numero1 / numero2;
  console.log(
    "Los números son iguales y por lo tanto la división es: ",
    division
  );
}
