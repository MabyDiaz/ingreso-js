/* 56. Crea una variable llamada `calificacion` y asígnale un valor numérico entre 0 y 100.
Utiliza una estructura condicional `if...else if...else` para mostrar en la consola si la
calificación es "Excelente," "Aprobado," o "Reprobado" según un rango de calificaciones. */

let calificacion = Math.floor(Math.random() * 10 + 1);

if (calificacion === 100) {
  console.log("Excelente");
} else if (calificacion >= 60) {
  console.log("Aprobado");
} else {
  console.log("Reprobado");
}
