/* 64- Escribe una función llamada contarPalabras que tome una cadena de texto como
argumento y retorne el número de palabras en esa cadena. Supón que las palabras están
separadas por espacios. */

let frase = prompt("Ingrese una frase");

function contarPalabras(frase) {
  let palabra = frase.split(" ");
  return palabra.length;
}
alert("La frase  " + frase + ", tiene " + contarPalabras(frase) + " palabras.");

// Otra forma
// function contarPalabras(cadena) {
//   let contador = 0;
//   let esPalabra = false;
//   for (let i = 0; i < cadena.length; i++) {
//     if (cadena[i] !== " " && !esPalabra) {
//       contador++;
//       esPalabra = true;
//     } else if (cadena[i] === " ") {
//       esPalabra = false;
//     }
//   }
//   return contador;
// }
// // Ejemplo de uso
// console.log(contarPalabras("Hola mundo")); //
