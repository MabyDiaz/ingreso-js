/* 60. Define tres variables `lado1`, `lado2` y `lado3` que representen las longitudes de los
lados de un triángulo. Escribe una estructura condicional para determinar si el triángulo es
equilátero (todos los lados iguales), isósceles (dos lados iguales), o escaleno (ningún lado
igual). */

let lado1 = 15;
let lado2 = 12;
let lado3 = 10;

if (lado1 === lado2 && lado1 === lado3) {
  console.log("El triángulo es equilátero.");
} else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
  console.log("El triángulo es isósceles.");
} else {
  console.log("El triángulo es escaleno.");
}
