/* 48. Crea una variable llamada `radio` y asígnale el radio de un círculo. Calcula el área del
círculo utilizando la fórmula `A = π * r^2` y muestra el resultado en la consola. */

let radio = 12.5;

// let area = (Math.PI * Math.pow(radio, 2)).toFixed(2);

// let area = (Math.PI * (radio * radio)).toFixed(2);

// let area = (Math.PI * (radio * radio)).toFixed(2);

let area = (Math.PI * radio ** 2).toFixed(2);

console.log(`El área del círculo con radio ${radio} es ${area}cm².`);
