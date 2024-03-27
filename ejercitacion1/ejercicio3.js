/* 3) Calcular el máximo de tres números. */

let num1 = parseFloat(prompt("Ingrese un número: "));
let num2 = parseFloat(prompt("Ingrese un segundo número: "));
let num3 = parseFloat(prompt("Ingrese un tercer número: "));

let numeroMaximo = Math.max(num1, num2, num3);

alert(`El número máximo es ${numeroMaximo}`);