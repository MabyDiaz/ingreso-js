/* 59. Crea una variable `hora` y asígnale una hora en formato de 24 horas. Escribe una
estructura condicional para mostrar "Buenos días", "Buenas tardes" o "Buenas noches" en
función de la hora. */

let hora = parseInt(prompt("Ingrese una hora en formato 24hs: "));

if (hora >= 0 && hora < 12) {
  alert("Buenos días");
} else if (hora <= 18) {
  alert("Buenas tardes");
} else if (hora <= 24) {
  alert("Buenas noches");
} else {
  alert("No es una hora válida. Ingrese un número entre 0 y 24.");
}
