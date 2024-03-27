/* 1) Calcular el área de un triángulo.*/
let base = parseFloat(
  prompt("Ingrese el valor de la base de un triángulo en cm: ")
);
let altura = parseFloat(
  prompt("Ingrese el valor de la altura de un triángulo en cm: ")
);

let area = (base * altura) / 2;

alert(
  `El área de un triángulo que tiene una base de ${base}cm y una altura de ${altura}cm es de ${area}cm².`
);
