/* 62- Define una función llamada invierteCadena que tome una cadena de texto como
argumento y retorne una nueva cadena con los caracteres en orden inverso. */

//Forma 1
let frase = prompt("Ingrese una frase");

function invierteCadena(frase) {
  let cadenaInvertida = " ";
  for (let i = frase.length - 1; i >= 0; i--) {
    cadenaInvertida += frase[i];
  }
  return cadenaInvertida;
}

Alert(invierteCadena(frase));

// Forma 2
let frase1 = prompt("Ingrese una frase");
function invierteCadena1(frase1) {
  // Convertir la frase en un array, invertirlo y luego unirlo nuevamente en una cadena
  let fraseInvertida = frase1.split("").reverse().join("");

  return fraseInvertida;
}
alert(invierteCadena1(frase1));
