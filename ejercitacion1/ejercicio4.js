/* 4) Calculadora de IMC. */

let peso = parseFloat(prompt("Ingrese el peso en kg: "));
let altura = parseFloat(prompt("Ingrese la altura en metros: "));

let imc = (peso / altura ** 2).toFixed(2);

alert(`El IMC es ${imc}`);
