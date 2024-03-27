/* 68- Define una función llamada esPalindromo que tome una cadena de texto como
argumento y determine si es un palíndromo. Un palíndromo es una palabra o frase que se
lee igual de izquierda a derecha y de derecha a izquierda, ignorando espacios y signos de
puntuación. */

//let cadenaTexto = prompt("Ingrese una palabra o frase").toLowerCase();

function esPalindromo(cadenaTexto) {
  // Eliminar los espacios y signos de puntuación
  const cadenaLimpia = cadenaTexto.replace(/[\W_]/g, "");

  return cadenaLimpia === cadenaLimpia.split(" ").reverse().join();
}

let cadenaTexto = "Anita lava la tina";
console.log(esPalindromo(cadenaTexto));
